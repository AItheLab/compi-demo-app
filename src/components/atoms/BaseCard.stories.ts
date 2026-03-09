import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseCard from './BaseCard.vue';

const meta: Meta<typeof BaseCard> = {
  title: 'Atoms/BaseCard',
  component: BaseCard,
  args: {
    variant: 'elevated',
  },
};

export default meta;

type Story = StoryObj<typeof BaseCard>;

export const Default: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        Este es el contenido de la card. Puedes agregar cualquier elemento aquí.
      </BaseCard>
    `,
  }),
};

export const WithTitle: Story = {
  args: {
    title: 'Titulo de la Card',
  },
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard v-bind="$props">
        Contenido con titulo arriba.
      </BaseCard>
    `,
  }),
};

export const WithFooter: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        Contenido principal de la card.
        <template #footer>
          <button>Acción</button>
        </template>
      </BaseCard>
    `,
  }),
};

export const Complete: Story = {
  args: {
    title: 'Card Completa',
  },
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard v-bind="$props">
        <p>Esta es una card con titulo, contenido y footer.</p>
        <template #footer>
          <button>Cancelar</button>
          <button>Aceptar</button>
        </template>
      </BaseCard>
    `,
  }),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Card Outlined',
  },
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard v-bind="$props">
        Card con borde visible y sin sombra.
      </BaseCard>
    `,
  }),
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    title: 'Card Flat',
  },
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard v-bind="$props">
        Card con fondo claro y sin sombra.
      </BaseCard>
    `,
  }),
};
