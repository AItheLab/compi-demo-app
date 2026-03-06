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
        label: 'Enviar',
        disabled: true,
      },
    });

    await wrapper.get('button').trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
    expect(wrapper.get('button').attributes('disabled')).toBeDefined();
  });
});
