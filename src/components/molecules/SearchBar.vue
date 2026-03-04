<template>
  <div class="search-bar">
    <BaseIcon class="search-bar__icon" name="search" :size="18" />
    <BaseInput
      class="search-bar__input"
      :model-value="query"
      :placeholder="placeholder"
      type="search"
      @update:model-value="onUpdate"
      @enter="emitSearch"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';
import BaseInput from '@/components/atoms/BaseInput.vue';

export interface SearchBarProps {
  placeholder?: string;
}

export default defineComponent({
  name: 'SearchBar',
  components: {
    BaseIcon,
    BaseInput,
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search...',
    },
  },
  emits: {
    search: (value: string) => typeof value === 'string',
  },
  setup(_, { emit }) {
    const query = ref('');

    const onUpdate = (value: string): void => {
      query.value = value;
    };

    const emitSearch = (): void => {
      emit('search', query.value);
    };

    return {
      query,
      onUpdate,
      emitSearch,
    };
  },
});
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background-color: white;
  border: 1px solid var(--color-surface-alt);
  border-radius: var(--radius-lg);
  padding: var(--space-1) var(--space-3);
}

.search-bar__icon {
  flex-shrink: 0;
}

.search-bar__input {
  width: 100%;
}

.search-bar__input :deep(.base-input) {
  border: none;
  padding: var(--space-1) 0;
}

.search-bar__input :deep(.base-input:focus) {
  outline: none;
}
</style>
