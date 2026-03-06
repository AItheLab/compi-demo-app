import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UserCard from './UserCard.vue';

const meta: Meta<typeof UserCard> = {
  title: 'Molecules/UserCard',
  component: UserCard,
  args: {
    name: 'Marta Ruiz',
    role: 'UX Researcher',
    avatarUrl: 'https://i.pravatar.cc/80?img=12',
  },
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {};

export const Highlighted: Story = {
  args: {
    name: 'Luis Navarro',
    role: 'Product Designer',
    avatarUrl: 'https://i.pravatar.cc/80?img=32',
  },
};
