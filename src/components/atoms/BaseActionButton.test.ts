import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseActionButton from './BaseActionButton.vue';

describe('BaseActionButton', () => {
  it('renders icon with accessible label', () => {
    const wrapper = mount(BaseActionButton, {
      props: {
        label: 'Crear',
        icon: 'check',
      },
    });

    const button = wrapper.get('button');

    expect(button.attributes('aria-label')).toBe('Crear');
    expect(wrapper.find('.base-icon').exists()).toBe(true);
  });

  it('emits click when pressed', async () => {
    const wrapper = mount(BaseActionButton, {
      props: {
        label: 'Agregar',
        icon: 'check',
      },
    });

    await wrapper.get('button').trigger('click');

    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('does not emit click when disabled', async () => {
    const wrapper = mount(BaseActionButton, {
      props: {
        label: 'Agregar',
        icon: 'check',
        disabled: true,
      },
    });

    const button = wrapper.get('button');

    expect(button.attributes('disabled')).toBeDefined();

    await button.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
  });
});
