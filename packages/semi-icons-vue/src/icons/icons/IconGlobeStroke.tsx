import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
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
        d="M9.53241 20.1363C9.4546 20.0175 9.37657 19.8925 9.29884 19.7609C8.75087 18.8336 8.22862 17.6026 7.88941 16H4.49811C5.55093 17.9704 7.35735 19.4775 9.53241 20.1363ZM3.63194 13.5H7.54964C7.51729 13.024 7.5 12.5243 7.5 12C7.5 11.4757 7.51729 10.976 7.54964 10.5H3.63193C3.54524 10.9869 3.5 11.4882 3.5 12C3.5 12.5118 3.54524 13.0131 3.63194 13.5ZM4.49809 8.00001H7.88941C8.22862 6.39739 8.75087 5.16644 9.29884 4.2391C9.37658 4.10754 9.45461 3.98248 9.53243 3.8637C7.35735 4.52249 5.55092 6.02958 4.49809 8.00001ZM14.4676 3.8637C14.5454 3.98248 14.6234 4.10754 14.7012 4.2391C15.2491 5.16644 15.7714 6.39739 16.1106 8.00001H19.5019C18.4491 6.02958 16.6426 4.52249 14.4676 3.8637ZM20.3681 10.5H16.4504C16.4827 10.976 16.5 11.4757 16.5 12C16.5 12.5243 16.4827 13.024 16.4504 13.5H20.3681C20.4548 13.0131 20.5 12.5118 20.5 12C20.5 11.4882 20.4548 10.9869 20.3681 10.5ZM19.5019 16H16.1106C15.7714 17.6026 15.2491 18.8336 14.7012 19.7609C14.6234 19.8925 14.5454 20.0175 14.4676 20.1363C16.6426 19.4775 18.4491 17.9704 19.5019 16ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM12.5488 5.51092C12.3574 5.18691 12.1691 4.92514 12 4.71783C11.8309 4.92514 11.6426 5.18691 11.4512 5.51092C11.1024 6.1012 10.7342 6.9131 10.456 8.00001H13.544C13.2658 6.9131 12.8976 6.1012 12.5488 5.51092ZM10 12C10 12.5326 10.0199 13.032 10.0562 13.5H13.9438C13.9801 13.032 14 12.5326 14 12C14 11.4674 13.9801 10.968 13.9438 10.5H10.0562C10.0199 10.968 10 11.4674 10 12ZM10.456 16C10.7342 17.0869 11.1024 17.8988 11.4512 18.4891C11.6426 18.8131 11.8309 19.0749 12 19.2822C12.1691 19.0749 12.3574 18.8131 12.5488 18.4891C12.8976 17.8988 13.2658 17.0869 13.544 16H10.456Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconGlobeStroke',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'globe_stroke'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
IconComponent.props = iconVuePropsType;
export default IconComponent;
export { SvgComponent };
