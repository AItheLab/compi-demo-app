<template>
  <article class="user-card">
    <BaseAvatar :name="name" :src="avatarUrl" :size="48" />
    <div class="user-card__content">
      <h3 class="user-card__name">{{ name }}</h3>
      <p class="user-card__role">{{ role }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseAvatar from '@/components/atoms/BaseAvatar.vue';

export interface UserCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export default defineComponent({
  name: 'UserCard',
  components: {
    BaseAvatar,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  border-radius: var(--radius-lg);
  padding: var(--space-3);
  background-color: white;
  border: 1px solid var(--color-surface-alt);
}

.user-card__name {
  margin: 0;
  font-size: var(--font-size-md);
}

.user-card__role {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}
</style>
