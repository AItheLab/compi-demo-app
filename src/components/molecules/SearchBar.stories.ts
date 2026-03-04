import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SearchBar from './SearchBar.vue';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  args: {
    placeholder: 'Buscar perfiles...',
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
