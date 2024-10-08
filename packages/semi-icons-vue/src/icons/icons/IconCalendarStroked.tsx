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
        d="M9.65168 2.11236C9.65168 1.49802 9.15366 1 8.53932 1C7.92498 1 7.42696 1.49802 7.42696 2.11236V2.97754H3.10112C1.94071 2.97754 1 3.91824 1 5.07866V10.0225V15.955V20.8989C1 22.0593 1.94071 23 3.10112 23H8.53049L8.53932 23L8.54816 23H15.4518C15.4548 23 15.4577 23 15.4607 23C15.4636 23 15.4666 23 15.4695 23H20.8989C22.0593 23 23 22.0593 23 20.8989V15.955V10.0225V5.07866C23 3.91824 22.0593 2.97754 20.8989 2.97754H16.573V2.11236C16.573 1.49802 16.075 1 15.4607 1C14.8463 1 14.3483 1.49802 14.3483 2.11236V2.97754H9.65168V2.11236ZM16.573 20.7753H20.7753V17.0674H16.573V20.7753ZM16.573 14.8427H20.7753V11.1349H16.573V14.8427ZM14.3483 11.1349V14.8427H9.65168V11.1349H14.3483ZM15.4607 8.91016H20.7753V5.20226H16.573V6.06742C16.573 6.68175 16.075 7.17978 15.4607 7.17978C14.8463 7.17978 14.3483 6.68175 14.3483 6.06742V5.20226H9.65168V6.06742C9.65168 6.68175 9.15366 7.17978 8.53932 7.17978C7.92498 7.17978 7.42696 6.68175 7.42696 6.06742V5.20226H3.22472V8.91016H8.53932H15.4607ZM14.3483 17.0674V20.7753H9.65168V17.0674H14.3483ZM7.42696 20.7753V17.0674H3.22472V20.7753H7.42696ZM7.42696 14.8427V11.1349H3.22472V14.8427H7.42696Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent({
  name: 'IconCalendarStroked',
  props: {
    ...iconVuePropsType,
  },
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'calendar_stroked'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
export default IconComponent;
export { SvgComponent };
