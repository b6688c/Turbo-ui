import { CategoryEntity, GeneralApi } from '@/api';
import { tryGetIcon } from '@/components/icon/shared';
import TableCrud from '@/components/table-crud';
import {
  TableContext,
  TableCrudProps,
  Toolbar,
} from '@/components/table-crud/interface';
import TreePanel from '@/components/tree/TreePanel';
import { Notification } from '@douyinfe/semi-ui';
import CategoryHelper from './helper';
import useCategoryApi, { CategoryTree } from '@/api/system/category';
import { useMemo, useRef, useState } from 'react';
import { TreePanelApi } from '@/components/tree';
import _ from 'lodash';
import Modular from '@/components/modular/Modular';
import { SET_CATEGORY_LITERAL_TOOLBAR } from '@/components/bar/collection';

export type CategoryTableCrudToolbar<T extends CategoryEntity> =
  TableCrudProps<T>['toolbar'] & {
    // 是否展示设置分类按钮
    showSetCategory?: boolean;
  };

export type CategoryTableCrudProps<T extends CategoryEntity> = Omit<
  TableCrudProps<T>,
  'toolbar'
> & {
  toolbar?: CategoryTableCrudToolbar<T>;
  // 功能编码
  funcCode: string;
};

const CategoryTableCrud = <T extends CategoryEntity>(
  props: CategoryTableCrudProps<T>,
) => {
  const { useApi } = props;
  let api: GeneralApi<T> | undefined = undefined;
  if (useApi) {
    if (typeof useApi === 'function') {
      api = props.useApi?.();
    } else {
      api = useApi;
    }
  }
  const [showCategoryTree, setShowCategoryTree] = useState<boolean>(false);
  const categoryTreeRef = useRef<TreePanelApi<CategoryTree>>();
  const currentRowRef = useRef<T[]>();
  const tableContextRef = useRef<TableContext<T>>();

  const newProps = useMemo(() => {
    const newProps = { ...props };
    const { toolbar = {} } = newProps;

    const { showSetCategory = true, append = [] } = toolbar;

    if (showSetCategory) {
      const setCategoryToolbar: Toolbar<T> = {
        ...SET_CATEGORY_LITERAL_TOOLBAR,
        onClick: (tableContext, formContext) => {
          const {
            dataSource,
            table: { selectedRowKeys = [] },
          } = tableContext as TableContext<T>;
          if (_.isEmpty(tableContext?.table.selectedRowKeys)) {
            Notification.error({ content: '请选择记录!' });
            return;
          }
          currentRowRef.current = dataSource.filter((record) => {
            return selectedRowKeys.includes(record.id);
          });
          setShowCategoryTree(true);
        },
      };
      append.push(setCategoryToolbar);
    }

    toolbar.append = append;
    newProps.toolbar = toolbar;
    return newProps;
  }, []);

  return (
    <>
      <TableCrud<T>
        {...newProps}
        getTableContext={(tableContext) =>
          (tableContextRef.current = tableContext) &&
          newProps.getTableContext?.(tableContext)
        }
      />
      <Modular
        title="设置分类"
        visible={showCategoryTree}
        onCancel={() => setShowCategoryTree(false)}
        onConfirm={() => {
          const treeApi = categoryTreeRef.current;
          const selectKey = treeApi?.getSelectKey() as string;
          if (_.isEmpty(selectKey)) {
            Notification.error({ content: '请选择一条记录!' });
            return;
          }
          const rows = [...(currentRowRef.current || [])];
          rows.forEach((row) => (row.categoryId = selectKey));
          api
            ?.batchSaveOrUpdate(rows)
            .then((res) => {
              const { code, data } = res;
              if (code === 200 && data) {
                Notification.success({
                  position: 'top',
                  content: res.message,
                });
                setShowCategoryTree(false);
                tableContextRef.current?.refresh();
              }
            })
            .catch((err) => {
              Notification.success({
                position: 'top',
                content: err,
              });
            });
        }}
      >
        <TreePanel<CategoryTree>
          columns={CategoryHelper.getColumns()}
          first={false}
          useApi={useCategoryApi}
          params={{ funcCode: newProps.funcCode }}
          toolbar={{ showAdd: false }}
          operateBar={{ showEdit: false, showDelete: false, showAdd: false }}
          expandAll
          getTreePanelApi={(treePanelApi) => {
            categoryTreeRef.current = treePanelApi;
          }}
        />
      </Modular>
    </>
  );
};

export default CategoryTableCrud;
