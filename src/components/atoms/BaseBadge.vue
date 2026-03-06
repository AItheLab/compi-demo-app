<template>
  <span class="base-badge" :class="badgeClasses" :style="badgeStyle">
    <slot>{{ label }}</slot>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';

export interface BaseBadgeProps {
  label: string;
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'error';
  customColor?: string;
}

export default defineComponent({
  name: 'BaseBadge',
  props: {
    label: {
      type: String,
      required: true,
    },
    tone: {
      type: String as PropType<BaseBadgeProps['tone']>,
      default: 'info',
    },
    customColor: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const badgeClasses = computed(() => {
      const classes = [`base-badge--${props.tone}`];

      if (props.customColor) {
        classes.push('base-badge--custom');
      }

      return classes;
    });

    const badgeStyle = computed(() =>
      props.customColor
        ? {
            '--badge-custom-color': props.customColor,
          }
        : {},
    );

    return {
      badgeClasses,
      badgeStyle,
    };
  },
});
</script>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.base-badge--info {
  color: var(--color-info);
  background-color: color-mix(in srgb, var(--color-info) 18%, white);
}

.base-badge--success {
  color: var(--color-success);
  background-color: color-mix(in srgb, var(--color-success) 18%, white);
}

.base-badge--warning {
  color: var(--color-warning);
  background-color: color-mix(in srgb, var(--color-warning) 18%, white);
}

.base-badge--danger {
  color: var(--color-danger);
  background-color: color-mix(in srgb, var(--color-danger) 18%, white);
}

.base-badge--error {
  color: var(--color-danger);
  background-color: color-mix(in srgb, var(--color-danger) 24%, white);
}

.base-badge--custom {
  color: var(--badge-custom-color);
  background-color: color-mix(in srgb, var(--badge-custom-color) 18%, white);
}
</style>
