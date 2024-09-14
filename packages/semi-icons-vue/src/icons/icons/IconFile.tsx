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
        d="M12 2C12 1.44772 11.5523 1 11 1H6C4.89543 1 4 1.89543 4 3V21C4 22.1046 4.89543 23 6 23H18C19.1046 23 20 22.1046 20 21V10C20 9.44772 19.5523 9 19 9H14C12.8954 9 12 8.10457 12 7V2ZM7 8C7 7.44772 7.44772 7 8 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H8C7.44772 9 7 8.55228 7 8ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17H8ZM19.0686 7.49999H14.5C13.9477 7.49999 13.5 7.05228 13.5 6.49999V1.93136C13.5 1.21864 14.3617 0.861707 14.8657 1.36568L19.6343 6.13431C20.1383 6.63828 19.7814 7.49999 19.0686 7.49999Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconFile',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'file'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
