import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseAvatar from './BaseAvatar.vue';

describe('BaseAvatar', () => {
  it('renders initials when src is not provided', () => {
    const wrapper = mount(BaseAvatar, {
      props: {
        name: 'Ana Torres',
      },
    });

    expect(wrapper.text()).toContain('AT');
  });

  it('renders image when src exists', () => {
    const wrapper = mount(BaseAvatar, {
      props: {
        name: 'Ana Torres',
        src: 'https://example.com/avatar.png',
      },
    });

    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('renders icon when iconName is provided without src', () => {
    const wrapper = mount(BaseAvatar, {
      props: {
        name: 'Ana Torres',
        iconName: 'user',
      },
    });

    expect(wrapper.find('.base-avatar__icon').exists()).toBe(true);
  });
});
