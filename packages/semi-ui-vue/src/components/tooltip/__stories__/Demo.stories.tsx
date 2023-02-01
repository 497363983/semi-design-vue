import type { Meta, StoryObj } from '@storybook/vue3';

import TooltipDemo from "../__test__/TooltipDemo";

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '展示类/Tooltip',
  render: (args: any) => ({
    setup() {
      return ()=>(<div style={{padding: '10px'}}>
        {args.name === 'TooltipDemo'?<TooltipDemo />:null}
      </div>);
    },
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['autodocs'],
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tooltip: Story = {
  args: {
    name: 'TooltipDemo'
  },
};
