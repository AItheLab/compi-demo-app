import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseCard from './BaseCard.vue';

describe('BaseCard', () => {
  it('renders default slot content', () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: 'Contenido de la card',
      },
    });

    expect(wrapper.text()).toContain('Contenido de la card');
  });

  it('renders title when provided', () => {
    const wrapper = mount(BaseCard, {
      props: {
        title: 'Titulo de prueba',
      },
      slots: {
        default: 'Contenido',
      },
    });

    expect(wrapper.text()).toContain('Titulo de prueba');
  });

  it('does not render header when no title', () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: 'Contenido',
      },
    });

    expect(wrapper.find('.base-card__header').exists()).toBe(false);
  });

  it('renders footer slot when provided', () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: 'Contenido',
        footer: 'Pie de card',
      },
    });

    expect(wrapper.text()).toContain('Pie de card');
  });

  it('applies variant class', () => {
    const wrapper = mount(BaseCard, {
      props: {
        variant: 'outlined',
      },
    });

    expect(wrapper.classes()).toContain('base-card--outlined');
  });

  it('defaults to elevated variant', () => {
    const wrapper = mount(BaseCard);

    expect(wrapper.classes()).toContain('base-card--elevated');
  });
});
