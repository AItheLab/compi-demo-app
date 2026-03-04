import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseAvatar from './BaseAvatar.vue';

const meta: Meta<typeof BaseAvatar> = {
  title: 'Atoms/BaseAvatar',
  component: BaseAvatar,
  args: {
    name: 'Alicia Vega',
    size: 48,
  },
};

export default meta;

type Story = StoryObj<typeof BaseAvatar>;

export const Fallback: Story = {};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/80?img=42',
  },
};
