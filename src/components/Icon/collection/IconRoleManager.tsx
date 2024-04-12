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
        d="M392.920908 608.305717a224.526233 224.526233 0 1 1 224.526234-224.526234 224.526233 224.526233 0 0 1-224.526234 224.526234z m0-384.902115a160.375881 160.375881 0 1 0 160.375881 160.375881 160.375881 160.375881 0 0 0-160.375881-160.375881z"
        p-id="27106"
      ></path>
      <path
        d="M713.67267 864.907126h-64.150352a256.60141 256.60141 0 0 0-513.202819 0h-64.150353a320.751762 320.751762 0 0 1 641.503524 0zM665.559906 576.23054v-64.150352a144.338293 144.338293 0 1 0-38.009084-283.704933l-16.839467-61.905091a208.488645 208.488645 0 1 1 54.848551 409.760376z"
        p-id="27107"
      ></path>
      <path
        d="M954.236492 800.756774h-64.150353a224.526233 224.526233 0 0 0-224.526233-224.526234v-64.150352a288.676586 288.676586 0 0 1 288.676586 288.676586z"
        p-id="27108"
      ></path>
    </svg>
  );
}
export const IconRoleManager = convertIcon(
  SvgComponent,
  'align_center_vertical',
);