import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseActionButton from './BaseActionButton.vue';

const meta: Meta<typeof BaseActionButton> = {
  title: 'Atoms/BaseActionButton',
  component: BaseActionButton,
  args: {
    label: 'Crear',
    icon: 'check',
    variant: 'primary',
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof BaseActionButton>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
