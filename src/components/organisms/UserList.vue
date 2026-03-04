<template>
  <section class="user-list">
    <header class="user-list__header">
      <h2 class="user-list__title">Team Members</h2>
      <BaseBadge :label="`${users.length} users`" tone="success" />
    </header>

    <div class="user-list__grid">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :role="user.role"
        :avatar-url="user.avatarUrl"
      />
      <p v-if="users.length === 0" class="user-list__empty">No hay resultados para esta busqueda.</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import BaseBadge from '@/components/atoms/BaseBadge.vue';
import UserCard from '@/components/molecules/UserCard.vue';
import type { User } from '@/types/user';

export interface UserListProps {
  users: User[];
}

export default defineComponent({
  name: 'UserList',
  components: {
    BaseBadge,
    UserCard,
  },
  props: {
    users: {
      type: Array as PropType<User[]>,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.user-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background-color: color-mix(in srgb, var(--color-surface) 92%, white);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  border: 1px solid var(--color-surface-alt);
}

.user-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-list__title {
  margin: 0;
  font-size: var(--font-size-lg);
}

.user-list__grid {
  display: grid;
  gap: var(--space-3);
}

.user-list__empty {
  margin: 0;
  color: var(--color-text-secondary);
}
</style>
