import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseTextArea from './BaseTextArea.vue';

const meta: Meta<typeof BaseTextArea> = {
  title: 'Atoms/BaseTextArea',
  component: BaseTextArea,
  args: {
    modelValue: '',
    placeholder: 'Comparte tus comentarios...',
    rows: 4,
  },
};

export default meta;

type Story = StoryObj<typeof BaseTextArea>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    modelValue: 'No editable',
  },
};

export const Tall: Story = {
  args: {
    rows: 8,
    placeholder: 'Más espacio para escribir...',
  },
};
