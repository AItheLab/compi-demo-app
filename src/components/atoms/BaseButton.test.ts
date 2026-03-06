import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  it('renders label', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Guardar',
      },
    });

    expect(wrapper.text()).toContain('Guardar');
  });

  it('renders icon when provided', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Buscar',
        icon: 'search',
      },
    });

    expect(wrapper.find('.base-icon').exists()).toBe(true);
  });

  it('emits click when pressed', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Enviar',
      },
    });

    await wrapper.get('button').trigger('click');

    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('does not emit click when disabled', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'No disponible',
        disabled: true,
      },
    });

    const button = wrapper.get('button');

    expect(button.attributes('disabled')).toBeDefined();

    await button.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
  });
});
