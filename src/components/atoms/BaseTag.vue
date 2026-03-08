<template>
  <span class="base-tag" :class="tagClasses">
    <slot>{{ label }}</slot>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';

export interface BaseTagProps {
  label: string;
  variant?: 'default' | 'outline';
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
}

export default defineComponent({
  name: 'BaseTag',
  props: {
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String as PropType<BaseTagProps['variant']>,
      default: 'default',
    },
    tone: {
      type: String as PropType<BaseTagProps['tone']>,
      default: 'neutral',
    },
  },
  setup(props) {
    const tagClasses = computed(() => [
      `base-tag--${props.variant}`,
      `base-tag--${props.tone}`,
    ]);

    return {
      tagClasses,
    };
  },
});
</script>

<style scoped>
.base-tag {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: 1;
}

/* Variant: default */
.base-tag--default.base-tag--neutral {
  background-color: var(--color-surface-alt);
  color: var(--color-text-secondary);
}

.base-tag--outline.base-tag--neutral {
  background-color: transparent;
  border: 1px solid var(--color-surface-alt);
  color: var(--color-text-secondary);
}

/* Tone: brand */
.base-tag--default.base-tag--brand {
  background-color: color-mix(in srgb, var(--color-brand-500) 18%, white);
  color: var(--color-brand-600);
}

.base-tag--outline.base-tag--brand {
  background-color: transparent;
  border: 1px solid var(--color-brand-500);
  color: var(--color-brand-600);
}

/* Tone: success */
.base-tag--default.base-tag--success {
  background-color: color-mix(in srgb, var(--color-success) 18%, white);
  color: var(--color-success);
}

.base-tag--outline.base-tag--success {
  background-color: transparent;
  border: 1px solid var(--color-success);
  color: var(--color-success);
}

/* Tone: warning */
.base-tag--default.base-tag--warning {
  background-color: color-mix(in srgb, var(--color-warning) 18%, white);
  color: var(--color-warning);
}

.base-tag--outline.base-tag--warning {
  background-color: transparent;
  border: 1px solid var(--color-warning);
  color: var(--color-warning);
}

/* Tone: danger */
.base-tag--default.base-tag--danger {
  background-color: color-mix(in srgb, var(--color-danger) 18%, white);
  color: var(--color-danger);
}

.base-tag--outline.base-tag--danger {
  background-color: transparent;
  border: 1px solid var(--color-danger);
  color: var(--color-danger);
}
</style>
