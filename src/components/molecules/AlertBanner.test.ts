import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AlertBanner from './AlertBanner.vue';

describe('AlertBanner', () => {
  it('renders title and message', () => {
    const wrapper = mount(AlertBanner, {
      props: {
        title: 'Sistema',
        message: 'Mensaje activo',
      },
    });

    expect(wrapper.text()).toContain('Sistema');
    expect(wrapper.text()).toContain('Mensaje activo');
  });

  it('applies tone class', () => {
    const wrapper = mount(AlertBanner, {
      props: {
        title: 'Warning',
        message: 'Revisar datos',
        tone: 'warning',
      },
    });

    expect(wrapper.classes()).toContain('alert-banner--warning');
  });
});
