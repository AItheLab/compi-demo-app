import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseInput from './BaseInput.vue';

const meta: Meta<typeof BaseInput> = {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  args: {
    modelValue: '',
    placeholder: 'Buscar usuarios...',
    type: 'search',
  },
};

export default meta;

type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Buscar usuarios...'
  },
};
