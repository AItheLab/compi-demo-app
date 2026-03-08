import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseTag from './BaseTag.vue';

const meta: Meta<typeof BaseTag> = {
  title: 'Atoms/BaseTag',
  component: BaseTag,
  args: {
    label: 'Etiqueta',
    variant: 'default',
    tone: 'neutral',
  },
};

export default meta;

type Story = StoryObj<typeof BaseTag>;

export const Neutral: Story = {};

export const Brand: Story = {
  args: {
    label: 'Destacado',
    tone: 'brand',
  },
};

export const Success: Story = {
  args: {
    label: 'Completado',
    tone: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Pendiente',
    tone: 'warning',
  },
};

export const Danger: Story = {
  args: {
    label: 'Eliminado',
    tone: 'danger',
  },
};

export const Outline: Story = {
  args: {
    label: 'Borde',
    variant: 'outline',
  },
};

export const OutlineBrand: Story = {
  args: {
    label: 'Borde destacado',
    variant: 'outline',
    tone: 'brand',
  },
};

export const CategoryList: Story = {
  render: () => ({
    components: { BaseTag },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <BaseTag label="Diseño" tone="brand" />
        <BaseTag label="Desarrollo" tone="success" />
        <BaseTag label="Revisión" tone="warning" />
        <BaseTag label="Archivado" tone="danger" />
        <BaseTag label="General" tone="neutral" />
      </div>
    `,
  }),
};
