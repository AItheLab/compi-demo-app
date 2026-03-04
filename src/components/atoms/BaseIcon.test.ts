import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseIcon from './BaseIcon.vue';

describe('BaseIcon', () => {
  it('renders mapped icon', () => {
    const wrapper = mount(BaseIcon, {
      props: {
        name: 'search',
      },
    });

    expect(wrapper.text()).toContain('?');
  });

  it('applies size in style', () => {
    const wrapper = mount(BaseIcon, {
      props: {
        name: 'info',
        size: 24,
      },
    });

    expect(wrapper.attributes('style')).toContain('24px');
  });
});
