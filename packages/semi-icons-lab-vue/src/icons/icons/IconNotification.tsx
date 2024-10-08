import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // @ts-ignore
            focusable={false}
      aria-hidden={true}
      {...props}
    >
      <g clip-path="url(#clip0_1_3040)">
        <circle cx={13.0623} cy={19.0623} r={2.78627} transform="rotate(-6 13.0623 19.0623)" fill="#324350" />
        <path
          d="M11.1644 0.963222C10.1698 1.06775 9.22759 1.66954 9.33212 2.66406L9.40414 3.34932C6.9001 4.28223 5.74125 6.76612 6.03349 9.54657L6.34708 12.5301C6.62564 15.1805 5.19578 16.309 3.98171 17.8708C3.40154 18.6171 4.00123 19.8152 4.94133 19.7164L21.1505 18.0128C22.0906 17.914 22.428 16.6173 21.7054 16.0079C20.1932 14.7327 18.5599 13.9261 18.2813 11.2758L17.9678 8.29223C17.6755 5.51178 16.0255 3.32311 13.3822 2.9312L13.3102 2.24595C13.2057 1.25143 12.1589 0.858691 11.1644 0.963222Z"
          fill="#FBCD2C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.4225 4.90871C18.1055 4.37727 17.58 3.92471 16.5455 3.39693C16.0536 3.14593 15.8583 2.54364 16.1093 2.05169C16.3603 1.55974 16.9625 1.36441 17.4545 1.61541C18.6397 2.22014 19.5461 2.88833 20.1401 3.88414C20.7233 4.86184 20.9283 6.02907 20.9988 7.45683C21.026 8.00844 20.601 8.4777 20.0494 8.50495C19.4977 8.5322 19.0285 8.10712 19.0012 7.55551C18.9355 6.22478 18.7503 5.45827 18.4225 4.90871Z"
          fill="#DDE3E8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.35465 12.6789C3.49632 12.005 3.46085 11.2839 3.21465 10.2268C3.08937 9.68896 3.42385 9.15136 3.96174 9.02608C4.49963 8.9008 5.03723 9.23528 5.16251 9.77317C5.44466 10.9846 5.53602 12.024 5.31188 13.0904C5.09077 14.1422 4.58176 15.1262 3.83488 16.259C3.53088 16.7201 2.91065 16.8474 2.44956 16.5434C1.98848 16.2394 1.86114 15.6192 2.16515 15.1581C2.8605 14.1034 3.20995 13.3674 3.35465 12.6789Z"
          fill="#DDE3E8"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3040">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconNotification',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'notification'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
