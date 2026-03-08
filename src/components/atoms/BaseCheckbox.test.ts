import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseCheckbox from './BaseCheckbox.vue';

describe('BaseCheckbox', () => {
  it('renders unchecked by default', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: false,
      },
    });

    const input = wrapper.get('input');
    expect((input.element as HTMLInputElement).checked).toBe(false);
  });

  it('renders checked when modelValue is true', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: true,
      },
    });

    const input = wrapper.get('input');
    expect((input.element as HTMLInputElement).checked).toBe(true);
  });

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: false,
      },
    });

    await wrapper.get('input').setValue(true);

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });

  it('renders label when provided', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: false,
        label: 'Aceptar términos',
      },
    });

    expect(wrapper.get('.base-checkbox__label').text()).toBe('Aceptar términos');
  });

  it('renders disabled state', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });

    const input = wrapper.get('input');
    expect(input.attributes('disabled')).toBeDefined();
    expect(wrapper.find('.base-checkbox--disabled').exists()).toBe(true);
  });

  it('shows check icon when checked', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.find('.base-checkbox__icon').exists()).toBe(true);
  });
});
