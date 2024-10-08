import { defineComponent, ref, h, Fragment, useSlots } from 'vue';
import Tag from '../../tag';
import { IconAlarm, IconBookmark, IconCamera, IconDuration, IconEdit, IconFolder } from '@kousum/semi-icons-vue';
import Slider from '../../slider';
import OverflowList from '../index';
interface OverflowListDemo1Props {
  name?: string;
}

export const vuePropsType = {
  name: String,
};
const OverflowListDemo1 = defineComponent((props, {}) => {
  const slots = useSlots();
  const width = ref(20);
  const renderOverflow = (items) => {
    return items.map((item, index) => {
      return (
        <Tag
          style={{ marginRight: '8px', marginLeft: '8px', flex: '0 0 auto', fontVariantNumeric: 'tabular-nums' }}
          key={item.key}
          key_={item.key}
        >
          +{item.length}
        </Tag>
      )
    });
  };
  const renderItem = (item, ind) => {
    return (
      <span key={item.key} className="item-cls">
        <Tag color="blue" style={{ marginRight: '8px', flex: '0 0 auto' }}>
          {item.icon()}
          {item.key}
        </Tag>
      </span>
    );
  };

  const items = [
    { icon: ()=><IconAlarm style={{ marginRight: '4px' }} />, key: 'alarm' },
    { icon: ()=><IconBookmark style={{ marginRight: '4px' }} />, key: 'bookmark' },
    { icon: ()=><IconCamera style={{ marginRight: '4px' }} />, key: 'camera' },
    { icon: ()=><IconDuration style={{ marginRight: '4px' }} />, key: 'duration' },
    { icon: ()=><IconEdit style={{ marginRight: '4px' }} />, key: 'edit' },
    { icon: ()=><IconFolder style={{ marginRight: '4px' }} />, key: 'folder' },
  ];
  return () => {
    return (
      <div>
        <Slider step={1} value={width.value} onChange={(v) => width.value = v} />
        <br />
        <br />
        <div style={{ width: `${width.value}%` }}>
          <OverflowList
            items={items}
            renderMode="scroll"
            overflowRenderer={renderOverflow}
            visibleItemRenderer={renderItem}
          />
        </div>
      </div>
    );
  };
});

export default OverflowListDemo1;
