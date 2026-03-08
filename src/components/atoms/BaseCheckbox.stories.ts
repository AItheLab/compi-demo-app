import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseCheckbox from './BaseCheckbox.vue';

const meta: Meta<typeof BaseCheckbox> = {
  title: 'Atoms/BaseCheckbox',
  component: BaseCheckbox,
  args: {
    modelValue: false,
    label: 'Aceptar términos y condiciones',
  },
};

export default meta;

type Story = StoryObj<typeof BaseCheckbox>;

export const Unchecked: Story = {};

export const Checked: Story = {
  args: {
    modelValue: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    modelValue: false,
    label: undefined,
  },
};

export const Disabled: Story = {
  args: {
    modelValue: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    modelValue: true,
    disabled: true,
  },
};
