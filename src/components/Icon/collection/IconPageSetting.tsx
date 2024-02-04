import { convertIcon } from '@douyinfe/semi-icons';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      t="1707038996495"
      class="icon"
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
        d="M563.192997 1024h-409.599972a51.199997 51.199997 0 0 1-51.199997-51.199997V51.200066a51.199997 51.199997 0 0 1 51.199997-51.199996h569.684961a42.666997 42.666997 0 0 1 30.036998 12.287999l155.989989 155.989989a42.666997 42.666997 0 0 1 12.287999 30.036998v399.017973h-34.133998V198.315056a8.191999 8.191999 0 0 0-2.389-5.802999L729.079985 36.522068a8.191999 8.191999 0 0 0-5.801999-2.389H153.593025A17.066999 17.066999 0 0 0 136.526026 51.200066v921.599937a17.066999 17.066999 0 0 0 17.066999 17.066999h409.599972z"
        p-id="8131"
      ></path>
      <path
        d="M904.525973 204.800056H733.859985a17.066999 17.066999 0 0 1-17.065999-17.066999V17.067069h34.132998v153.599989h153.599989zM204.793021 170.667058h443.73297V204.800056H204.793021z m0 136.532991h614.399958v34.132998h-614.399958z m0 136.532991h614.399958v34.133997h-614.399958z m0 136.53399h238.932984V614.400028H204.793021z m0 136.532991h204.799986v34.132998h-204.799986zM892.237974 827.392013a37.546997 37.546997 0 0 1 0-49.834996l24.575998-27.305998a19.114999 19.114999 0 0 0 2.048-22.527999l-40.959997-72.021995a20.479999 20.479999 0 0 0-20.820999-9.556999l-35.839997 7.509999a37.887997 37.887997 0 0 1-43.349997-25.259998l-11.604999-34.132998a19.114999 19.114999 0 0 0-18.089999-13.311999H665.24999a19.114999 19.114999 0 0 0-18.431999 13.311999l-11.945999 34.133998a37.887997 37.887997 0 0 1-43.349997 24.916998l-35.839998-7.509999a19.796999 19.796999 0 0 0-20.819999 9.216999l-41.643997 71.679995a19.114999 19.114999 0 0 0 2.39 22.527999l24.233998 27.647998a37.546997 37.546997 0 0 1 0 49.833996l-24.233998 27.306999a19.114999 19.114999 0 0 0-2.39 22.527998l41.301997 72.020995a18.772999 18.772999 0 0 0 20.479999 9.558l36.180998-7.168a37.204997 37.204997 0 0 1 43.007997 24.916998l11.604999 34.132998a19.114999 19.114999 0 0 0 18.431999 13.311999h82.943994a19.796999 19.796999 0 0 0 18.431999-13.311999l11.605999-34.132998a37.546997 37.546997 0 0 1 41.983997-24.575998l34.132998 7.167999a19.114999 19.114999 0 0 0 20.820998-9.215999l41.642997-71.679995a19.455999 19.455999 0 0 0-2.047999-22.527998z m-168.276988 46.420997a74.069995 74.069995 0 1 1 53.589996-54.612996 73.044995 73.044995 0 0 1-53.589996 54.612996z"
        p-id="8132"
      ></path>
    </svg>
  );
}
export const IconPageSetting = convertIcon(
  SvgComponent,
  'align_center_vertical',
);
