import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import UserCard from './UserCard.vue';

describe('UserCard', () => {
  it('renders user name and role', () => {
    const wrapper = mount(UserCard, {
      props: {
        name: 'Diego Leon',
        role: 'Frontend Engineer',
      },
    });

    expect(wrapper.text()).toContain('Diego Leon');
    expect(wrapper.text()).toContain('Frontend Engineer');
  });

  it('passes avatar URL to BaseAvatar', () => {
    const wrapper = mount(UserCard, {
      props: {
        name: 'Diego Leon',
        role: 'Frontend Engineer',
        avatarUrl: 'https://i.pravatar.cc/80?img=1',
      },
    });

    expect(wrapper.find('img').attributes('src')).toContain('pravatar');
  });
});
