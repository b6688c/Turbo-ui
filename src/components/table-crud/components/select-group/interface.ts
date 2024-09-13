import { Entity } from '@/api';
import { CardColumnProps } from '../../interface';
import { FormSelectGroupColumnProps } from '@/components/tform/components';

// Select Group 组件
export type TableSelectGroupColumnProps<T extends Entity> = CardColumnProps<T> &
  FormSelectGroupColumnProps<T>;
