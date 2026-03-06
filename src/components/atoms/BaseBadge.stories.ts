import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseBadge from './BaseBadge.vue';

const meta: Meta<typeof BaseBadge> = {
  title: 'Atoms/BaseBadge',
  component: BaseBadge,
  args: {
    label: 'Nuevo',
    tone: 'info',
  },
};

export default meta;

type Story = StoryObj<typeof BaseBadge>;

export const Info: Story = {};

export const Success: Story = {
  args: {
    tone: 'success',
    label: 'Completado',
  },
};

export const Warning: Story = {
  args: {
    tone: 'warning',
    label: 'Advertencia',
  },
};

export const Error: Story = {
  args: {
    tone: 'error',
    label: 'Error',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Personalizado',
    customColor: '#9333ea',
  },
};
