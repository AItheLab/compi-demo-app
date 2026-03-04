<template>
  <header class="navigation-bar">
    <div class="navigation-bar__logo">{{ logo }}</div>
    <SearchBar class="navigation-bar__search" placeholder="Buscar miembros..." @search="onSearch" />
    <BaseAvatar :name="userName" :src="userAvatarUrl" :size="40" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseAvatar from '@/components/atoms/BaseAvatar.vue';
import SearchBar from '@/components/molecules/SearchBar.vue';

export interface NavigationBarProps {
  logo: string;
  userName: string;
  userAvatarUrl?: string;
}

export default defineComponent({
  name: 'NavigationBar',
  components: {
    BaseAvatar,
    SearchBar,
  },
  props: {
    logo: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userAvatarUrl: {
      type: String,
      default: '',
    },
  },
  emits: {
    search: (value: string) => typeof value === 'string',
  },
  setup(_, { emit }) {
    const onSearch = (value: string): void => {
      emit('search', value);
    };

    return {
      onSearch,
    };
  },
});
</script>

<style scoped>
.navigation-bar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-4);
  background-color: white;
  border: 1px solid var(--color-surface-alt);
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-4);
}

.navigation-bar__logo {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-brand-600);
}

.navigation-bar__search {
  min-width: 240px;
}
</style>
