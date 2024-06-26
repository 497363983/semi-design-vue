import {defineComponent, ref, h, onActivated, Fragment} from 'vue'
import Tooltip from "../index"
import Input from '../../input'
import Button from '../../button';

interface ExampleProps {
  name?: string
}

export const vuePropsType = {
  name: String
}

const TooltipDemo = defineComponent<ExampleProps>((props, {slots}) => {

  return () => (
    <div>
      <div>
        <Tooltip content={'hi bytedance'} motion trigger={'click'}>
          <div style={{ color: 'red' }}>click</div>
        </Tooltip>
      </div>
      <div>
        <Tooltip content={'hi bytedance'} motion trigger={'contextMenu'}>
          {123}
        </Tooltip>
      </div>
      {/*<Tooltip*/}
      {/*  position='topLeft'*/}
      {/*  content='semi design tooltip'>*/}
      {/*  <Button type='secondary' style={{ marginRight: 8 }}>指向元素中心</Button>*/}
      {/*</Tooltip>*/}
      {/*<div>*/}
      {/*  <Tooltip content={'hi bytedance'} motion>*/}
      {/*    <div style={{color:'red'}}>hover</div>*/}
      {/*  </Tooltip>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <Tooltip content={'hi bytedance'} motion trigger={'focus'}>*/}
      {/*    <Input />*/}
      {/*  </Tooltip>*/}
      {/*</div>*/}
    </div>
  );
})


export default TooltipDemo

