import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseTag from './BaseTag.vue';

describe('BaseTag', () => {
  it('renders label text', () => {
    const wrapper = mount(BaseTag, {
      props: {
        label: 'Etiqueta',
      },
    });

    expect(wrapper.text()).toContain('Etiqueta');
  });

  it('renders default variant classes', () => {
    const wrapper = mount(BaseTag, {
      props: {
        label: 'Test',
      },
    });

    expect(wrapper.classes()).toContain('base-tag--default');
    expect(wrapper.classes()).toContain('base-tag--neutral');
  });

  it('renders outline variant classes', () => {
    const wrapper = mount(BaseTag, {
      props: {
        label: 'Test',
        variant: 'outline',
      },
    });

    expect(wrapper.classes()).toContain('base-tag--outline');
  });

  it('applies tone classes', () => {
    const wrapper = mount(BaseTag, {
      props: {
        label: 'Test',
        tone: 'brand',
      },
    });

    expect(wrapper.classes()).toContain('base-tag--brand');
  });

  it('renders different tones', () => {
    const tones: Array<'neutral' | 'brand' | 'success' | 'warning' | 'danger'> = [
      'neutral',
      'brand',
      'success',
      'warning',
      'danger',
    ];

    for (const tone of tones) {
      const wrapper = mount(BaseTag, {
        props: {
          label: tone,
          tone,
        },
      });

      expect(wrapper.classes()).toContain(`base-tag--${tone}`);
    }
  });

  it('renders slot content when provided', () => {
    const wrapper = mount(BaseTag, {
      props: {
        label: 'fallback',
      },
      slots: {
        default: 'Contenido del slot',
      },
    });

    expect(wrapper.text()).toBe('Contenido del slot');
  });
});
