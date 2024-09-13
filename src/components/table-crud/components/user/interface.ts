import { Entity } from '@/api';
import { FormUserColumnProps } from '@/components/tform/components';
import { CardColumnProps } from '../../interface';

// user 组件
export type TableUserColumnProps<T extends Entity> = CardColumnProps<T> &
  FormUserColumnProps<T>;
