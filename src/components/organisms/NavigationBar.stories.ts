import type { Meta, StoryObj } from '@storybook/vue3-vite';
import NavigationBar from './NavigationBar.vue';

const meta: Meta<typeof NavigationBar> = {
  title: 'Organisms/NavigationBar',
  component: NavigationBar,
  args: {
    logo: 'Compi DS',
    userName: 'Alicia Vega',
    userAvatarUrl: 'https://i.pravatar.cc/80?img=48',
  },
};

export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {};
