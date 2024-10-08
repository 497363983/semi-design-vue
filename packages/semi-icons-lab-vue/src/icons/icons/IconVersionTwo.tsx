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
        d="M19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2Z"
        fill="#4CC3FA"
      />
      <path
        d="M4.05114 16.8466H10.0341V15.5256H6.23295V15.4659L7.73722 13.9361C9.43324 12.3082 9.90199 11.5156 9.90199 10.5312C9.90199 9.0696 8.71307 8 6.95739 8C5.22727 8 4 9.07386 4 10.7315H5.50426C5.50426 9.84091 6.06676 9.28267 6.93608 9.28267C7.76705 9.28267 8.38494 9.78977 8.38494 10.6122C8.38494 11.3409 7.94176 11.8608 7.08097 12.7344L4.05114 15.7045V16.8466Z"
        fill="white"
      />
      <path
        d="M11.9916 16.9403C12.4944 16.9403 12.9248 16.5227 12.9291 16.0028C12.9248 15.4915 12.4944 15.0739 11.9916 15.0739C11.4717 15.0739 11.0498 15.4915 11.0541 16.0028C11.0498 16.5227 11.4717 16.9403 11.9916 16.9403Z"
        fill="white"
      />
      <path
        d="M16.9107 17.0128C19.0159 17.017 20.273 15.3551 20.273 12.4915C20.273 9.64489 19.0073 8 16.9107 8C14.8141 8 13.5528 9.64062 13.5485 12.4915C13.5485 15.3509 14.8056 17.0128 16.9107 17.0128ZM16.9107 15.679C15.8241 15.679 15.1423 14.5881 15.1465 12.4915C15.1508 10.4119 15.8284 9.31676 16.9107 9.31676C17.9974 9.31676 18.6749 10.4119 18.6792 12.4915C18.6792 14.5881 18.0016 15.679 16.9107 15.679Z"
        fill="white"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconVersionTwo',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'version-two'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
