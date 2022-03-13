import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, IconProps, vuePropsType as iconVuePropsType } from '../components/Icon';
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
                d="M22.9899 8.52063L22.9899 8.52057L22.99 8.52046C22.9937 8.48905 22.9974 8.45898 23.0012 8.43074C22.9945 8.34747 22.9869 8.26979 22.9797 8.19545C22.9715 8.1115 22.9637 8.0318 22.958 7.95312C22.857 6.80248 22.4785 5.75316 21.8151 4.816C20.7839 3.35781 19.385 2.45322 17.64 2.10947C17.1966 2.02263 16.7351 1.98645 16.2844 2.00454C15.8518 2.02263 15.6174 2.31934 15.603 2.7065C15.5886 3.11899 15.7869 3.3759 16.2376 3.46997C16.4122 3.50754 16.5917 3.52705 16.7711 3.54655C16.9028 3.56087 17.0344 3.57518 17.1641 3.59662C19.5148 3.97655 21.1841 5.77125 21.4185 8.15213C21.4437 8.41265 21.4834 8.68041 21.5699 8.92646C21.6853 9.24487 21.9845 9.39685 22.3054 9.36066C22.6407 9.32448 22.8678 9.13271 22.9472 8.7962C22.9682 8.70107 22.9797 8.60594 22.9899 8.52067L22.9899 8.52063ZM11.6898 8.85932L11.6898 8.85934C11.6317 8.8802 11.5705 8.90221 11.5037 8.92646C11.5142 8.83709 11.5256 8.75298 11.5366 8.67204L11.5366 8.67202C11.5559 8.53011 11.5738 8.39794 11.583 8.2643C11.5919 8.13764 11.6032 8.01099 11.6145 7.88441C11.6445 7.54811 11.6744 7.21233 11.6587 6.87847C11.6191 6.09328 11.0278 5.54691 10.2418 5.5252C9.63972 5.50711 9.04843 5.59757 8.49321 5.82191C7.2169 6.33571 6.07039 7.07024 5.01762 7.95312C3.61513 9.12909 2.53352 10.5583 1.70789 12.1938C1.2428 13.1238 0.979605 14.0899 1.00124 15.1319C1.02287 16.0727 1.3149 16.9122 1.88816 17.6576C2.31359 18.2148 2.83637 18.6635 3.41684 19.047C5.15463 20.1904 7.05466 20.849 9.13496 20.9792C10.5266 21.0697 11.8931 20.9105 13.2415 20.5776C15.174 20.1 16.8937 19.2496 18.2602 17.7625C18.8731 17.1003 19.3959 16.3803 19.6591 15.4938C20.0124 14.2961 19.623 13.0767 18.6351 12.3132C18.2487 12.0144 17.8149 11.8134 17.3803 11.6119L17.3802 11.6118C17.3201 11.584 17.2601 11.5562 17.2002 11.5281C16.9118 11.3942 16.8397 11.2639 16.8901 10.9564C16.9165 10.7875 16.9485 10.621 16.9805 10.4548L16.9805 10.4548L16.9805 10.4547C17.0054 10.3253 17.0303 10.1961 17.0524 10.0662C17.2074 9.16165 16.7892 8.42351 15.9527 8.19193C15.6535 8.10871 15.3218 8.07976 15.0117 8.10147C13.959 8.17746 12.9386 8.40903 11.9436 8.76725C11.8607 8.7979 11.7791 8.82723 11.69 8.85924L11.6898 8.85932ZM9.79979 10.789L9.80008 10.789C9.91968 10.7801 10.0393 10.7711 10.1589 10.761C11.0278 10.8008 11.8859 10.8948 12.7187 11.1445C13.7102 11.4412 14.5863 11.9369 15.2821 12.7185C16.2484 13.7968 16.3637 15.1717 15.5922 16.402C14.9468 17.426 14.0239 18.1207 12.9278 18.5875C11.9399 19.0072 10.9124 19.3111 9.83801 19.3871C8.08941 19.5102 6.42372 19.2352 4.90946 18.2944C4.24607 17.8819 3.68364 17.3609 3.36997 16.6227C2.94093 15.6096 3.06712 14.6398 3.65119 13.728C4.16676 12.9247 4.88783 12.3386 5.70986 11.8754C6.8131 11.2567 8.01009 10.9527 9.26115 10.8333C9.4407 10.816 9.62024 10.8025 9.79979 10.789ZM15.5633 5.81467C15.567 5.29001 16.0176 4.92094 16.5296 5.05481C18.2566 5.50349 19.3958 6.57452 19.8718 8.31857C20.0304 8.89389 19.7672 9.32448 19.2372 9.38961C18.8695 9.43664 18.5882 9.24487 18.4368 8.86133C18.4016 8.77505 18.3676 8.68816 18.3336 8.60129C18.2249 8.32382 18.1164 8.04657 17.9681 7.79029C17.6436 7.22583 17.1245 6.87847 16.5224 6.66137C16.4505 6.63498 16.3778 6.61288 16.3055 6.59089L16.3055 6.59088C16.229 6.56764 16.153 6.54452 16.0789 6.51663C15.7364 6.40084 15.5633 6.15841 15.5633 5.81467ZM6.58957 16.8217C7.09793 17.3211 7.72887 17.5128 8.43553 17.5345C9.2936 17.5201 10.0435 17.2306 10.6564 16.6082C11.4136 15.8411 11.4749 14.6471 10.761 13.8764C10.1913 13.2576 9.43421 13.0514 8.623 13.0803C7.82982 13.1093 7.15201 13.4458 6.59678 14.0175C5.8 14.8389 5.79639 16.0474 6.58957 16.8217Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent({
    name: 'IconWeibo',

    setup(props, { slots }) {
        return () => (
            <ConvertIcon iconType={'activity'} {...props}>
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
