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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.2983 1C9.83136 1 9.4266 1.32309 9.32313 1.77838L8.6518 4.73223C8.2046 4.93859 7.77969 5.18502 7.38167 5.46689L4.48633 4.57087C4.04031 4.43284 3.55812 4.62183 3.32467 5.02617L1.6229 7.97373C1.38945 8.37807 1.46688 8.89015 1.80943 9.20741L4.03314 11.2669C4.01121 11.5083 4 11.7529 4 12C4 12.2471 4.0112 12.4916 4.03313 12.733L1.80943 14.7925C1.46688 15.1098 1.38945 15.6218 1.6229 16.0262L3.32467 18.9737C3.55812 19.3781 4.0403 19.5671 4.48633 19.429L7.38158 18.533C7.77963 18.8149 8.20457 19.0614 8.6518 19.2678L9.32313 22.2216C9.4266 22.6769 9.83136 23 10.2983 23H13.7018C14.1687 23 14.5735 22.6769 14.6769 22.2216L15.3483 19.2677C15.7955 19.0614 16.2204 18.8149 16.6185 18.533L19.5138 19.429C19.9598 19.5671 20.442 19.3781 20.6755 18.9737L22.3772 16.0262C22.6107 15.6218 22.5333 15.1098 22.1907 14.7925L19.9669 12.7329C19.9888 12.4915 20 12.2471 20 12C20 11.7529 19.9888 11.5084 19.9669 11.267L22.1907 9.20741C22.5333 8.89015 22.6107 8.37807 22.3772 7.97373L20.6755 5.02617C20.442 4.62183 19.9598 4.43284 19.5138 4.57087L16.6184 5.46692C16.2204 5.18505 15.7955 4.93863 15.3483 4.73226L14.6769 1.77838C14.5735 1.32309 14.1687 1 13.7018 1H10.2983Z"
        fill="#DDE3E8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
        fill="#AAB2BF"
      />
      <circle cx={12} cy={12} r={3} fill="#324350" />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconConfig',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'config'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
