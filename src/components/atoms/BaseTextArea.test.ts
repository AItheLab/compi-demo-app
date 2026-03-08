import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseTextArea from './BaseTextArea.vue';

describe('BaseTextArea', () => {
  it('renders current value', () => {
    const wrapper = mount(BaseTextArea, {
      props: {
        modelValue: 'comentario inicial',
      },
    });

    expect((wrapper.get('textarea').element as HTMLTextAreaElement).value).toBe('comentario inicial');
  });

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(BaseTextArea, {
      props: {
        modelValue: '',
      },
    });

    await wrapper.get('textarea').setValue('nuevo comentario');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['nuevo comentario']);
  });

  it('renders disabled state', () => {
    const wrapper = mount(BaseTextArea, {
      props: {
        modelValue: 'bloqueado',
        disabled: true,
      },
    });

    expect(wrapper.get('textarea').attributes('disabled')).toBeDefined();
  });
});
