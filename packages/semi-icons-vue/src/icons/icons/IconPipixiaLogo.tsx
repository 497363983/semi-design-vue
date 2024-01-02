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
        d="M17.0275 2.86138C16.7063 2.59779 16.2306 2.64233 15.9649 2.96022L14.7847 4.37302L14.5396 4.66666C14.4756 4.74305 14.4296 4.83067 14.4007 4.92336C14.3624 5.0461 14.3554 5.1779 14.3843 5.30643C14.3996 5.37486 14.4252 5.43895 14.4581 5.49905C14.5337 5.63809 14.6521 5.75141 14.7994 5.81984L16.9632 6.83002C17.0673 6.87853 17.1765 6.90171 17.2843 6.90171C17.52 6.90171 17.7458 6.79055 17.8901 6.59829C17.9194 6.55883 17.946 6.51791 17.9676 6.47193C18.0396 6.32131 18.0535 6.15983 18.0231 6.00812C17.9778 5.78364 17.8317 5.58197 17.6066 5.47697L16.3226 4.87774L16.4703 4.70178L17.1279 3.91428C17.3936 3.59602 17.3486 3.1246 17.0275 2.86138ZM12.9293 5.90529L12.9147 5.85098C12.8913 5.76409 12.8727 5.67683 12.8562 5.58957C12.8204 5.3984 12.8007 5.20795 12.797 5.01931C12.7938 4.82162 12.8076 4.6261 12.8376 4.43384C13.0433 3.11953 14.0076 1.98228 15.3847 1.61731C15.6821 1.53874 15.9836 1.5 16.2835 1.5C16.8894 1.5 17.4889 1.65822 18.0304 1.96852C18.8401 2.43233 19.4178 3.1771 19.6575 4.06562L19.6721 4.11921C19.8753 4.87159 19.8128 5.65402 19.5055 6.36367C19.45 6.49185 19.3893 6.61821 19.3177 6.74059C19.2982 6.77407 19.2767 6.80607 19.2553 6.83803C19.2449 6.85342 19.2346 6.8688 19.2245 6.88433C19.1189 7.04654 19.0027 7.19933 18.8748 7.34017C18.4291 7.82752 17.8547 8.18017 17.2021 8.35324C15.3434 8.84529 13.4266 7.7475 12.9293 5.90529ZM6.30254 5.71147C6.44797 5.32442 6.88314 5.12782 7.27337 5.27192L8.18902 5.6101L9.12295 5.95515L9.36812 6.04566C9.53583 6.10758 9.67395 6.2267 9.76054 6.37841C9.78648 6.42403 9.80877 6.47254 9.82485 6.52323C9.89391 6.7441 9.857 6.98415 9.72364 7.17351L8.35673 9.11891C8.21022 9.32782 7.97527 9.4397 7.73668 9.4397C7.58797 9.4397 7.43743 9.39625 7.30589 9.30537C6.96425 9.0693 6.87985 8.60332 7.11772 8.26442L7.9285 7.11015L7.55033 6.97075L6.74612 6.67349C6.74067 6.67137 6.73564 6.66863 6.73058 6.66588L6.73057 6.66588C6.72613 6.66347 6.72167 6.66104 6.71689 6.65901C6.51118 6.5732 6.36502 6.40701 6.29779 6.21113C6.24445 6.05363 6.23933 5.87911 6.30254 5.71147ZM4.59729 7.95268C4.60055 7.96637 4.60322 7.98005 4.60588 7.99371C4.60948 8.01221 4.61307 8.03066 4.61812 8.04899L4.63274 8.10294C4.67402 8.25609 4.72847 8.4031 4.78949 8.54684C5.08179 9.23766 5.58968 9.81589 6.25979 10.1997C7.06948 10.6639 8.00925 10.788 8.90554 10.5509H8.90518C10.7643 10.0588 11.8725 8.15942 11.3755 6.31758L11.3609 6.26327C11.3346 6.16623 11.3043 6.07101 11.2707 5.97832C11.2031 5.79366 11.1212 5.61734 11.0259 5.45079C10.9236 5.27229 10.8055 5.1061 10.6755 4.95113C10.0189 4.16797 9.03343 3.69765 7.98843 3.69765C7.69137 3.69765 7.3892 3.73566 7.08812 3.81532C6.19183 4.05284 5.4406 4.62527 4.97218 5.42797C4.63785 6.00113 4.48183 6.63946 4.50522 7.28177C4.51325 7.50589 4.54395 7.73037 4.59729 7.95268ZM16.2329 13.8248C15.8671 14.4526 15.2763 14.9019 14.5693 15.0895C14.3332 15.1521 14.095 15.1822 13.8612 15.1822C12.6514 15.1822 11.5421 14.3817 11.2147 13.1702C11.1292 12.8555 11.3177 12.5322 11.6352 12.4475C11.9517 12.3631 12.2798 12.5499 12.3645 12.865C12.5856 13.6818 13.4359 14.1684 14.2613 13.9501C14.6606 13.844 14.9946 13.5902 15.2018 13.235C15.4082 12.8802 15.4634 12.4663 15.3563 12.0702C15.2708 11.7556 15.4597 11.4322 15.7769 11.3479C16.0933 11.2632 16.421 11.45 16.5062 11.7653C16.6958 12.4652 16.5986 13.197 16.2329 13.8248ZM20.9672 10.7371C20.7026 9.75659 20.2353 8.86264 19.6025 8.09722C19.0299 8.70297 18.2995 9.14071 17.4737 9.35976C17.0824 9.46331 16.6889 9.51291 16.3016 9.51291C14.7892 9.51291 13.3715 8.75655 12.533 7.52335C12.4004 9.38655 11.097 11.0488 9.17657 11.5575C8.78962 11.66 8.3961 11.711 8.00478 11.711C7.21664 11.711 6.43691 11.505 5.73391 11.1017C5.00241 10.6828 4.4167 10.0872 4.02245 9.3746C2.68916 11.0666 2.14182 13.336 2.74287 15.5653L4.44191 21.8779C4.51572 22.1513 4.79962 22.3175 5.07732 22.2498C8.19222 21.476 8.78414 21.307 8.89047 21.27C8.91605 21.2592 8.94199 21.2505 8.96866 21.2432L15.9106 19.4043C17.7463 18.918 19.2846 17.746 20.2426 16.1037C21.2003 14.4617 21.4579 12.5557 20.9672 10.7371Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconPipixiaLogo',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'pipixia_logo'} {...props}>
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
