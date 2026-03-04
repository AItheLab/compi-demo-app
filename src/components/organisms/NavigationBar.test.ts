import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import NavigationBar from './NavigationBar.vue';

describe('NavigationBar', () => {
  it('renders logo and user avatar', () => {
    const wrapper = mount(NavigationBar, {
      props: {
        logo: 'Compi DS',
        userName: 'Alicia Vega',
      },
    });

    expect(wrapper.text()).toContain('Compi DS');
    expect(wrapper.text()).toContain('AV');
  });

  it('re-emits search from SearchBar', async () => {
    const wrapper = mount(NavigationBar, {
      props: {
        logo: 'Compi DS',
        userName: 'Alicia Vega',
      },
    });

    await wrapper.get('input').setValue('Diego');
    await wrapper.get('input').trigger('keyup.enter');

    expect(wrapper.emitted('search')?.[0]).toEqual(['Diego']);
  });
});
