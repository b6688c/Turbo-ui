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
        d="M192 256h448v64H192zM494.08 448c-17.92 18.56-33.28 40.32-45.44 64H192V448h302.08zM417.28 643.2c0 20.48 1.92 41.024 6.4 60.8H192v-64h225.28v3.2z"
        p-id="5329"
      ></path>
      <path
        d="M64 128v768h504.32c-30.72-16-57.6-37.76-80-64H142.08V192h547.84v163.84c5.12-0.64 10.24-0.64 15.296-0.64 21.824 0 42.24 2.56 62.72 7.04V128H64z"
        p-id="5330"
      ></path>
      <path
        d="M747.84 495.616l120.832 122.368 0.128 0.128 4.352 4.416c3.84 3.968 5.056 9.728 4.288 15.872 0.064 0.832 0.448 1.472 0.448 2.304s-0.384 1.472-0.448 2.304c0.64 6.272-0.64 11.968-4.544 15.872l-4.48 4.288-0.064 0.192-122.304 120.832c-8.832 8.64-25.92 5.44-38.464-7.104-12.416-12.608-15.36-29.76-6.656-38.464l67.584-66.56-178.752-1.216a32 32 0 0 1 0.448-64l178.688 1.216-66.624-67.52c-8.576-8.768-5.376-25.92 7.104-38.4 12.544-12.288 29.696-15.232 38.464-6.528z"
        p-id="5331"
      ></path>
      <path
        d="M769.28 395.52H768c-19.84-5.76-40.96-8.32-62.72-8.32-4.416 0-9.536 0-14.08 0.64h-1.28c-56.96 3.2-108.8 24.96-149.76 60.16-1.28 1.28-2.56 1.92-3.84 3.2-20.48 17.28-37.12 37.76-50.56 60.8-0.64 1.28-1.28 1.92-1.92 3.2-21.12 37.12-33.92 79.36-34.56 124.8v3.2c0 21.12 2.56 41.6 7.68 60.8 0 1.28 0.64 1.92 0.64 3.2 12.16 49.28 39.04 92.16 75.52 124.8l3.2 3.2c36.48 32 81.344 53.76 131.2 60.8 12.16 1.92 25.024 3.2 37.76 3.2l64-8.32a255.36 255.36 0 0 0 192-247.68c0-119.04-81.28-219.52-192-247.68z m0 451.2H768a211.328 211.328 0 0 1-154.816-11.584A22.528 22.528 0 0 1 607.36 832a211.008 211.008 0 0 1-115.2-188.8c0-48 16-92.16 42.88-128 20.48-27.52 47.36-49.28 78.08-64 23.68-11.52 49.92-18.56 78.08-20.48 4.48-0.64 9.6-0.64 14.08-0.64 22.464 0 43.584 3.2 64 9.6a213.76 213.76 0 0 1 149.12 203.52c0 95.36-62.72 176-149.12 203.52z"
        p-id="5332"
      ></path>
    </svg>
  );
}
export const IconGenerate = convertIcon(SvgComponent, 'align_center_vertical');