import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { IdEntity } from '@/api/interface';
import { TableColumnProps, TableContext } from './interface';
import { ColumnType, FormColumnProps, FormContext } from '../TForm/interface';
import { FormColumnDecorator } from '../TForm/form';
import { ReactNode } from 'react';
import {
  BaseTableField,
  CascadeTableField,
  CheckboxTableField,
  ColorTableField,
  DateRangeTableField,
  DateTableField,
  IconTableField,
  InputTableField,
  NumberTableField,
  PasswordTableField,
  RadioTableField,
  RateTableField,
  SelectGroupTableField,
  SelectTableField,
  SliderTableField,
  SwitchTableField,
  TableField,
  TextareaTableField,
  TimeRangeTableField,
  TimeTableField,
  TransferTableField,
  TreeSelectTableField,
  UploadDragTableField,
  UploadTableField,
} from './components';
import { ISchema } from '@formily/json-schema';

export interface TableColumnDecorator<T extends IdEntity>
  extends FormColumnDecorator<T> {
  /**
   * 增强 table column props 并转换为column
   * @param column table column props
   * @returns column props
   */
  wrap(column: TableColumnProps<T>): ColumnProps<T>;

  /**
   * 获取table context
   */
  getTableContext(): TableContext<T>;

  /**
   * 重新设置table context
   */
  setTableContext(tableContext: TableContext<T>): void;
}

export class UndefinedTableField<T extends IdEntity> extends BaseTableField<
  T,
  any
> {
  doWrap(column: TableColumnProps<T>): ColumnProps<T> {
    return { ...column };
  }

  public getType(): ColumnType {
    return 'undefined';
  }
}

export class TableColumnFactory {
  public static get<T extends IdEntity, K extends FormColumnProps<T>>(
    type: ColumnType,
    decorator: TableColumnDecorator<T>,
  ): TableField<T, K> {
    switch (type) {
      case 'input':
        return new InputTableField<T>(decorator);
      case 'number':
        return new NumberTableField<T>(decorator);
      case 'select':
        return new SelectTableField<T>(decorator);
      case 'selectGroup':
        return new SelectGroupTableField<T>(decorator);
      case 'treeSelect':
        return new TreeSelectTableField<T>(decorator);
      case 'cascade':
        return new CascadeTableField<T>(decorator);
      case 'radio':
        return new RadioTableField<T>(decorator);
      case 'textarea':
        return new TextareaTableField<T>(decorator);
      case 'icon':
        return new IconTableField<T>(decorator);
      case 'color':
        return new ColorTableField<T>(decorator);
      case 'date':
        return new DateTableField<T>(decorator);
      case 'checkbox':
        return new CheckboxTableField<T>(decorator);
      case 'switch':
        return new SwitchTableField<T>(decorator);
      case 'password':
        return new PasswordTableField<T>(decorator);
      case 'rate':
        return new RateTableField<T>(decorator);
      case 'slider':
        return new SliderTableField<T>(decorator);
      case 'transfer':
        return new TransferTableField<T>(decorator);
      case 'dateRange':
        return new DateRangeTableField<T>(decorator);
      case 'time':
        return new TimeTableField<T>(decorator);
      case 'timeRange':
        return new TimeRangeTableField<T>(decorator);
      case 'upload':
        return new UploadTableField<T>(decorator);
      case 'uploadDrag':
        return new UploadDragTableField<T>(decorator);
      case 'undefined':
      default:
        return new UndefinedTableField<T>(decorator);
    }
  }
}

class TableColumnDecoratorImpl<T extends IdEntity>
  implements TableColumnDecorator<T>
{
  constructor(
    private tableContext?: TableContext<T>,
    private formContext?: FormContext<T>,
  ) {}
  schema(column: FormColumnProps<T>, index: number): ISchema {
    return TableColumnFactory.get(column.type, this).schema(column, index);
  }

  render(column: FormColumnProps<T>, type: 'search' | 'form'): ReactNode {
    return TableColumnFactory.get(column.type, this).render(column, type);
  }
  wrap(column: TableColumnProps<T>): ColumnProps<T> {
    return TableColumnFactory.get(column.type, this).wrap(column);
  }

  getTableContext(): TableContext<T> {
    return this.tableContext;
  }
  setTableContext(tableContext: TableContext<T>): void {
    this.tableContext = tableContext;
  }
  getFormContext(): FormContext<T> {
    return this.formContext;
  }
  setFormContext(formContext: FormContext<T>): void {
    this.formContext = formContext;
  }
  getDefaultSpan(column: FormColumnProps<T>): FormColumnProps<T>['span'] {
    return TableColumnFactory.get(column.type, this).getDefaultSpan();
  }
}

export function getTableDecorator<T extends IdEntity>(
  tableContext?: TableContext<T>,
  formContext?: FormContext<T>,
): TableColumnDecorator<T> {
  return new TableColumnDecoratorImpl<T>(tableContext, formContext);
}
