import { convertIcon } from '@douyinfe/semi-icons';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      // 注意自定义icon需要加上下面参数
      width="1em"
      height="1em"
      focusable={false}
      aria-hidden={true}
      {...props}
    >
      <path
        d="M129.910448 132.457711m50.945273 0l244.537314 0q50.945274 0 50.945273 50.945274l0 244.537314q0 50.945274-50.945273 50.945273l-244.537314 0q-50.945274 0-50.945273-50.945273l0-244.537314q0-50.945274 50.945273-50.945274Z"
        fill="#333333"
        p-id="28800"
      ></path>
      <path
        d="M552.756219 132.457711m50.945274 0l244.537313 0q50.945274 0 50.945274 50.945274l0 244.537314q0 50.945274-50.945274 50.945273l-244.537313 0q-50.945274 0-50.945274-50.945273l0-244.537314q0-50.945274 50.945274-50.945274Z"
        fill="#333333"
        p-id="28801"
      ></path>
      <path
        d="M129.910448 555.303483m50.945273 0l244.537314 0q50.945274 0 50.945273 50.945273l0 244.537314q0 50.945274-50.945273 50.945273l-244.537314 0q-50.945274 0-50.945273-50.945273l0-244.537314q0-50.945274 50.945273-50.945273Z"
        fill="#333333"
        p-id="28802"
      ></path>
      <path
        d="M552.756219 555.303483m50.945274 0l244.537313 0q50.945274 0 50.945274 50.945273l0 244.537314q0 50.945274-50.945274 50.945273l-244.537313 0q-50.945274 0-50.945274-50.945273l0-244.537314q0-50.945274 50.945274-50.945273Z"
        fill="#333333"
        p-id="28803"
      ></path>
    </svg>
  );
}
export const IconMenuManager = convertIcon(
  SvgComponent,
  'align_center_vertical',
);
