import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SearchBar from './SearchBar.vue';

describe('SearchBar', () => {
  it('renders search input with placeholder', () => {
    const wrapper = mount(SearchBar, {
      props: {
        placeholder: 'Buscar personas',
      },
    });

    expect(wrapper.get('input').attributes('placeholder')).toBe('Buscar personas');
  });

  it('emits search on enter', async () => {
    const wrapper = mount(SearchBar);
    const input = wrapper.get('input');

    await input.setValue('Alicia');
    await input.trigger('keyup.enter');

    expect(wrapper.emitted('search')?.[0]).toEqual(['Alicia']);
  });
});
