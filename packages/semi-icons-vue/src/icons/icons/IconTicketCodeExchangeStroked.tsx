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
        d="M0.875 5C0.875 4.44772 1.32272 4 1.875 4H21.875C22.4273 4 22.875 4.44772 22.875 5V9.79944C22.875 10.2402 22.5864 10.629 22.1645 10.7566C21.4269 10.9797 21.0568 11.5213 21.0568 12C21.0568 12.4787 21.4269 13.0203 22.1645 13.2434C22.5209 13.3512 22.7823 13.6454 22.8548 14H19.7993C19.3421 13.4577 19.0568 12.7743 19.0568 12C19.0568 10.7235 19.8321 9.69429 20.875 9.13633V6H2.875V9.13633C3.9179 9.69429 4.69318 10.7235 4.69318 12C4.69318 13.2765 3.9179 14.3057 2.875 14.8637V18H13.875V20H1.875C1.32272 20 0.875 19.5523 0.875 19V14.2006C0.875 13.7598 1.16362 13.371 1.58555 13.2434C2.32306 13.0203 2.69318 12.4787 2.69318 12C2.69318 11.5252 2.32904 10.9884 1.60342 10.7621C1.1831 10.6438 0.875 10.2576 0.875 9.79944V5ZM6.875 10C6.875 9.44772 7.32272 9 7.875 9C8.42728 9 8.875 9.44772 8.875 10V14C8.875 14.5523 8.42728 15 7.875 15C7.32272 15 6.875 14.5523 6.875 14V10ZM20.9053 15.4697C20.6124 15.1768 20.1376 15.1768 19.8447 15.4697C19.5518 15.7626 19.5518 16.2374 19.8447 16.5303L20.0643 16.75H15.875C15.4608 16.75 15.125 17.0858 15.125 17.5C15.125 17.9142 15.4608 18.25 15.875 18.25H21.875C22.1783 18.25 22.4518 18.0673 22.5679 17.787C22.684 17.5068 22.6198 17.1842 22.4053 16.9697L20.9053 15.4697ZM16.8447 22.5303C17.1376 22.8232 17.6124 22.8232 17.9053 22.5303C18.1982 22.2374 18.1982 21.7626 17.9053 21.4697L17.6857 21.25H21.875C22.2892 21.25 22.625 20.9142 22.625 20.5C22.625 20.0858 22.2892 19.75 21.875 19.75L15.875 19.75C15.5717 19.75 15.2982 19.9327 15.1821 20.213C15.066 20.4932 15.1302 20.8158 15.3447 21.0303L16.8447 22.5303ZM11.875 9C11.3227 9 10.875 9.44772 10.875 10V14C10.875 14.5523 11.3227 15 11.875 15C12.4273 15 12.875 14.5523 12.875 14V10C12.875 9.44772 12.4273 9 11.875 9ZM14.875 10C14.875 9.44772 15.3227 9 15.875 9C16.4273 9 16.875 9.44772 16.875 10V14C16.875 14.5523 16.4273 15 15.875 15C15.3227 15 14.875 14.5523 14.875 14V10Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTicketCodeExchangeStroked',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'ticket_code_exchange_stroked'} {...props}>
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
