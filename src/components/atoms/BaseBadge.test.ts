import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseBadge from './BaseBadge.vue';

describe('BaseBadge', () => {
  it('renders label text', () => {
    const wrapper = mount(BaseBadge, {
      props: {
        label: 'Activo',
      },
    });

    expect(wrapper.text()).toContain('Activo');
  });

  it('applies tone class', () => {
    const wrapper = mount(BaseBadge, {
      props: {
        label: 'Warning',
        tone: 'warning',
      },
    });

    expect(wrapper.classes()).toContain('base-badge--warning');
  });

  it('supports error tone', () => {
    const wrapper = mount(BaseBadge, {
      props: {
        label: 'Error',
        tone: 'error',
      },
    });

    expect(wrapper.classes()).toContain('base-badge--error');
  });

  it('uses custom color style when provided', () => {
    const wrapper = mount(BaseBadge, {
      props: {
        label: 'Custom',
        customColor: '#7c3aed',
      },
    });

    expect(wrapper.classes()).toContain('base-badge--custom');
    expect(wrapper.attributes('style')).toContain('--badge-color: #7c3aed');
  });
});
