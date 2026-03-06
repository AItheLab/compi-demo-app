import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseInput from './BaseInput.vue';

describe('BaseInput', () => {
  it('renders current value', () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: 'texto inicial',
      },
    });

    expect((wrapper.get('input').element as HTMLInputElement).value).toBe('texto inicial');
  });

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: '',
      },
    });

    await wrapper.get('input').setValue('nuevo valor');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['nuevo valor']);
  });

  it('does not emit events when disabled', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: 'valor inicial',
        disabled: true,
      },
    });

    const input = wrapper.get('input');

    expect(input.attributes('disabled')).toBeDefined();

    await input.setValue('otro valor');
    await input.trigger('keyup.enter');

    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
    expect(wrapper.emitted('enter')).toBeUndefined();
  });
});
