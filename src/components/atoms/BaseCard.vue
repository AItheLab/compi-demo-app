<template>
  <div class="base-card" :class="[`base-card--${variant}`]">
    <div v-if="title" class="base-card__header">
      <h3 class="base-card__title">{{ title }}</h3>
    </div>
    <div class="base-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export interface BaseCardProps {
  title?: string;
  variant?: 'elevated' | 'outlined' | 'flat';
}

export default defineComponent({
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: undefined,
    },
    variant: {
      type: String as PropType<BaseCardProps['variant']>,
      default: 'elevated',
    },
  },
});
</script>

<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: white;
}

.base-card__header {
  padding: var(--space-4) var(--space-4) 0;
}

.base-card__title {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.base-card__body {
  padding: var(--space-4);
  color: var(--color-text-secondary);
}

.base-card__footer {
  padding: var(--space-3) var(--space-4);
  border-top: 1px solid var(--color-surface-alt);
  background-color: var(--color-surface);
}

/* Variants */
.base-card--elevated {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.base-card--outlined {
  border: 1px solid var(--color-surface-alt);
  box-shadow: none;
}

.base-card--flat {
  background-color: var(--color-surface);
  box-shadow: none;
}
</style>
