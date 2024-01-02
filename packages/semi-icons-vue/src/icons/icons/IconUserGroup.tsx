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
        d="M15.9519 3.08518C15.9519 3.08518 15.3955 2.25045 14.839 2.25045C14.3347 2.25045 13.8588 2.29067 12.9995 3.08518C11.8865 4.11426 11.4995 5.50003 11.5001 7.81529C11.5004 9.35198 11.8053 11.0033 13.1695 11.7107C13.3097 11.7833 13.4356 11.8296 13.5479 11.8567C14.329 13.4975 15.578 14.5614 16.9652 14.5614C18.4993 14.5614 19.8645 13.2601 20.6145 11.3163C20.6344 11.3081 20.6542 11.2991 20.6739 11.2895C21.3017 11.4351 22.1838 11.482 22.7946 11.496C23.0591 11.5021 23.1983 11.179 23.0296 10.9753C22.7108 10.5902 22.3063 10.0398 22.0733 9.48474C22.0183 9.35391 21.9585 8.96446 21.877 8.43422L21.877 8.4342C21.6643 7.0502 21.3042 4.70704 20.4995 3.50003C19.7762 2.4151 17.4995 2.00004 16.6728 2.25045C16.0583 2.43659 15.9519 3.08518 15.9519 3.08518ZM2.20943 4.41781C2.41956 3.94627 3.00621 3.85321 3.43888 4.1348L4.00006 4.50003L4.01047 2.99839C4.01188 2.79438 4.13638 2.60913 4.33177 2.55044C4.84619 2.39592 5.43828 2.32348 6.11055 2.32348C9.06172 2.32348 10.4679 3.7195 10.5404 7.32687C11.2876 7.61461 11.342 8.53936 11.0678 9.57505C10.857 10.3715 10.3953 10.9816 9.90998 11.1828C9.12912 13.2066 7.70776 14.5614 6.11055 14.5614C4.51356 14.5614 3.09236 13.2069 2.31143 11.1836C1.82539 10.9833 1.36267 10.3726 1.15155 9.57502C0.877201 8.53854 0.931893 7.61317 1.68074 7.32618C1.70505 6.11939 1.87864 5.16011 2.20943 4.41781ZM8.00006 22C8.55235 22 8.99141 21.5507 9.03457 21.0001C9.13697 19.6939 9.48458 18.8515 10.3041 17.9918C10.8019 17.4696 10.7324 16.6026 10.0442 16.3862C9.2495 16.1362 8.39292 16 7.50006 16C4.44344 16 1.81216 17.596 0.631949 19.889C0.0894311 20.9431 2.03078 22 3.21625 22H8.00006ZM21.7989 22C22.979 22 23.9218 20.9546 23.4111 19.8907C22.31 17.5968 19.8536 16 17.0001 16C14.1465 16 11.6901 17.5968 10.589 19.8907C10.0783 20.9546 11.0211 22 12.2012 22H21.7989Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconUserGroup',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'user_group'} {...props}>
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
