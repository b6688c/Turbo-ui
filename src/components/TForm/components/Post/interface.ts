import { IdEntity } from '@/api';
import { FormColumnProps } from '../../interface';
import { SelectProps } from '@douyinfe/semi-ui/lib/es/select';

// post 组件
export type FormPostColumnProps<T extends IdEntity> = FormColumnProps<T> &
  Omit<SelectProps, 'optionList'>;
