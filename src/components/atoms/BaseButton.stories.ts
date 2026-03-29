import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseButton from './BaseButton.vue';

const meta: Meta<typeof BaseButton> = {
  title: 'Atoms/BaseButton',
  component: BaseButton,
  args: {
    label: 'Accion',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secundario',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    label: 'Acento',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Buscar',
    icon: 'search',
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'Continuar',
    icon: 'check',
    iconPosition: 'right',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deshabilitado',
    disabled: true,
  },
};
