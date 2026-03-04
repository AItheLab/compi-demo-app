import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UserList from './UserList.vue';

const meta: Meta<typeof UserList> = {
  title: 'Organisms/UserList',
  component: UserList,
  args: {
    users: [
      { id: 'u1', name: 'Alicia Vega', role: 'Product Designer', avatarUrl: 'https://i.pravatar.cc/80?img=32' },
      { id: 'u2', name: 'Diego Leon', role: 'Frontend Engineer', avatarUrl: 'https://i.pravatar.cc/80?img=59' },
      { id: 'u3', name: 'Marta Ruiz', role: 'UX Researcher', avatarUrl: 'https://i.pravatar.cc/80?img=47' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof UserList>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    users: [],
  },
};
