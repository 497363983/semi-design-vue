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
        d="M18.1929 16.882C18.6485 16.8301 18.8373 16.0719 18.8373 16.0719C18.8373 16.0719 19.3622 14.425 18.8032 8.95386C18.2443 3.4827 17.2349 2.01069 17.2349 2.01069C17.2349 2.01069 16.8733 1.31515 16.4248 1.36627C15.8323 1.43379 15.3081 1.82961 14.6688 2.64511L14.6657 2.64916C14.0236 3.46825 12.2151 5.7753 8.43644 6.20591C7.98015 6.24451 7.5244 6.30092 7.06912 6.35727C6.84167 6.38542 6.61421 6.41357 6.38691 6.43947C5.11769 6.58411 4.13093 7.51989 3.86264 8.69864C3.80834 8.70029 3.75367 8.70421 3.69872 8.71047C2.62758 8.83253 1.8582 9.79982 1.98026 10.871C2.10232 11.9421 3.06961 12.7115 4.14075 12.5894C4.1957 12.5831 4.24985 12.5747 4.30313 12.564C4.82976 13.6522 6.00176 14.342 7.27097 14.1974C7.49771 14.1715 7.72499 14.1424 7.95231 14.1132C8.40782 14.0547 8.8644 13.9962 9.3205 13.9638C12.9142 13.5543 15.3352 15.2487 16.1547 15.9736C16.9742 16.6986 17.3709 16.9757 18.1929 16.882Z"
        fill="currentColor"
      />
      <path
        d="M22.8848 8.48837C23.0299 9.76161 22.3352 10.937 21.2411 11.4612C20.755 11.6941 20.2576 11.2949 20.1966 10.7594C20.1966 10.7594 20.1624 9.77651 20.042 8.80332C19.9216 7.83012 19.7545 6.88043 19.7545 6.88043C19.7545 6.88043 20.0883 5.84403 20.6144 5.96158C21.7984 6.22615 22.7397 7.21513 22.8848 8.48837Z"
        fill="currentColor"
      />
      <path
        d="M12.0313 19.5734C11.8438 18.9622 10.9528 16.4179 10.6117 16.1015C10.2904 15.8034 9.8996 15.8539 9.50907 15.9044C9.49225 15.9066 9.47542 15.9088 9.4586 15.9109C9.30149 15.931 9.15518 15.9505 9.01343 15.9695C8.53454 16.0335 8.10766 16.0905 7.49192 16.1368C6.90987 16.1806 6.37881 16.1667 5.85693 16.048C6.90017 17.9721 8.27775 19.9809 9.11929 21.1581C9.56097 21.7759 10.3651 21.9995 11.071 21.7196C11.9217 21.3822 12.3701 20.6774 12.0313 19.5734Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconHorn',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'horn'} {...props}>
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
