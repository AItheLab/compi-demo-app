import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import UserList from './UserList.vue';

describe('UserList', () => {
  it('renders amount of user cards', () => {
    const wrapper = mount(UserList, {
      props: {
        users: [
          { id: '1', name: 'Alicia', role: 'Designer' },
          { id: '2', name: 'Diego', role: 'Engineer' },
        ],
      },
    });

    expect(wrapper.findAllComponents({ name: 'UserCard' })).toHaveLength(2);
  });

  it('shows empty state when there are no users', () => {
    const wrapper = mount(UserList, {
      props: {
        users: [],
      },
    });

    expect(wrapper.text()).toContain('No hay resultados');
  });
});
