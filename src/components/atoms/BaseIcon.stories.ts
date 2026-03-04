import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseIcon from './BaseIcon.vue';

const meta: Meta<typeof BaseIcon> = {
  title: 'Atoms/BaseIcon',
  component: BaseIcon,
  args: {
    name: 'search',
    size: 20,
  },
};

export default meta;

type Story = StoryObj<typeof BaseIcon>;

export const Default: Story = {};

export const Alert: Story = {
  args: {
    name: 'alert',
  },
};
