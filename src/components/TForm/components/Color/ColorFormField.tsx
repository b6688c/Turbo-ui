import { IdEntity } from '@/api/interface';
import { Form, RadioGroup, Space } from '@douyinfe/semi-ui';
import { ColumnType, FormColumnProps, FormContext } from '../../interface';
import { ReactNode } from 'react';
import { BaseFormField } from '..';
import { FormColorColumnProps } from '.';
import { TagColor } from '@douyinfe/semi-ui/lib/es/tag';

export class ColorFormField<T extends IdEntity> extends BaseFormField<
  T,
  FormColorColumnProps<T>
> {
  private colorList = [
    'amber',
    'blue',
    'cyan',
    'green',
    'grey',
    'indigo',
    'light-blue',
    'light-green',
    'lime',
    'orange',
    'pink',
    'purple',
    'red',
    'teal',
    'violet',
    'yellow',
    'white',
  ] as TagColor[];

  protected doRender(
    column: FormColumnProps<T>,
    type: 'search' | 'form',
  ): ReactNode {
    const props = this.getGeneralProps(column, type);

    return (
      <Form.Slot label={props.label}>
        <Space wrap>
          <RadioGroup
            type="pureCard"
            mode="advanced"
            disabled={this.decorator.getFormContext()?.type === 'details'}
            value={this.decorator.getFormContext()?.values?.[props.field]}
            onChange={(e) => {
              const formContext = this.decorator.getFormContext();
              const { value } = e.target;
              const values = { ...formContext?.values } || {};
              values[props.field] = value;
              const newContext = {
                ...formContext,
                visible: true,
                values,
              };
              formContext?.newContext(newContext as FormContext<T>);
              formContext?.formApi?.setValue(props.field, value);
            }}
          >
            {this.colorList.map((item) => (
              <Radio
                value={item}
                extra={
                  <Tag
                    color={item}
                    key={item}
                    shape="circle"
                    type="solid"
                    style={{ padding: '2px 10px' }}
                  />
                }
              />
            ))}
          </RadioGroup>
        </Space>
      </Form.Slot>
    );
  }

  public getType(): ColumnType {
    return 'color';
  }

  public getDefaultSpan(): FormColumnProps<T>['span'] {
    return 6;
  }
}
