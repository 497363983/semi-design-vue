import cls from 'classnames';
import * as PropTypes from '../PropTypes';
import { isNumber, isString, noop } from 'lodash';
import { cssClasses, strings } from '@douyinfe/semi-foundation/badge/constants';
import '@douyinfe/semi-foundation/badge/badge.scss';
import {ComponentObjectPropsOptions, CSSProperties, defineComponent, h, PropType, useSlots} from 'vue';
import { vuePropsMake } from '../PropTypes';
import { useConfigContext } from '../configProvider/context/Consumer';
import { VueJsxNode } from '../interface';

const prefixCls = cssClasses.PREFIX;

export type BadgeType = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success';
export type BadgeTheme = 'solid' | 'light' | 'inverted';
export type BadgePosition = 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';

export interface BadgeProps {
  count?: VueJsxNode;
  dot?: boolean;
  type?: BadgeType;
  theme?: BadgeTheme;
  position?: BadgePosition;
  overflowCount?: number;
  style?: CSSProperties;
  className?: string;
  onMouseEnter?: (e: MouseEvent) => any;
  onMouseLeave?: (e: MouseEvent) => any;
  onClick?: (e: MouseEvent) => any;
}

const propTypes:ComponentObjectPropsOptions<BadgeProps> = {
  count: PropTypes.node,
  dot: PropTypes.bool,
  type: PropTypes.string as PropType<BadgeProps['type']>,
  theme: PropTypes.string as PropType<BadgeProps['theme']>,
  position: PropTypes.string as PropType<BadgeProps['position']>,
  overflowCount: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func as PropType<BadgeProps['onClick']>,
  onMouseEnter: PropTypes.func as PropType<BadgeProps['onMouseEnter']>,
  onMouseLeave: PropTypes.func as PropType<BadgeProps['onMouseLeave']>,
};

const defaultProps = {
  dot: false,
  type: 'primary',
  theme: 'solid',
  className: '',
  onClick: () => noop,
  onMouseEnter: () => noop,
  onMouseLeave: () => noop,
};

export const vuePropsType = vuePropsMake<BadgeProps>(propTypes, defaultProps);
const Badge = defineComponent<BadgeProps>((props, {}) => {
  const slots = useSlots();

  const { context } = useConfigContext();

  return () => {
    const { direction } = context.value;
    // DefaultPosition here, static can't get this
    const defaultPosition = direction === 'rtl' ? 'leftTop' : 'rightTop';
    // eslint-disable-next-line max-len
    const { count, dot, type, theme, position = defaultPosition, overflowCount, style, className, ...rest } = props;
    const children = slots.default?.();
    const custom = count && !(isNumber(count) || isString(count));
    const showBadge = count !== null && typeof count !== 'undefined';
    const wrapper = cls(className, {
      [`${prefixCls}-${type}`]: !custom,
      [`${prefixCls}-${theme}`]: !custom,
      [`${prefixCls}-${position}`]: Boolean(position) && Boolean(children),
      [`${prefixCls}-block`]: !children,
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-count`]: !dot && !custom && showBadge,
      [`${prefixCls}-custom`]: custom,
    });
    let content;
    if (isNumber(count)) {
      content = overflowCount && overflowCount < count ? `${overflowCount}+` : `${count}`;
    } else {
      content = count;
    }
    return (
      <span class={prefixCls} {...rest}>
        {children}
        <span class={wrapper} style={style} x-semi-prop="count">
          {dot ? null : content}
        </span>
      </span>
    );
  };
},{
  props: vuePropsType,
  name:'Badge'
});


export default Badge;
