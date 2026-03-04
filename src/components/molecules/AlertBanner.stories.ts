import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AlertBanner from './AlertBanner.vue';

const meta: Meta<typeof AlertBanner> = {
  title: 'Molecules/AlertBanner',
  component: AlertBanner,
  args: {
    title: 'Maintenance Window',
    message: 'Deployment programado para las 22:00 CET.',
    tone: 'warning',
  },
};

export default meta;

type Story = StoryObj<typeof AlertBanner>;

export const Warning: Story = {};

export const Success: Story = {
  args: {
    tone: 'success',
    title: 'Deployment Completed',
    message: 'Todos los checks han pasado.',
  },
};
