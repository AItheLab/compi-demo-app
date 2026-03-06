<template>
  <button class="base-button" :class="[`base-button--${variant}`]" :disabled="disabled" type="button" @click="onClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export interface BaseButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
}

export default defineComponent({
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String as PropType<BaseButtonProps['variant']>,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    click: (event: MouseEvent) => event instanceof MouseEvent,
  },
  setup(props, { emit }) {
    const onClick = (event: MouseEvent): void => {
      if (props.disabled) {
        return;
      }

      emit('click', event);
    };

    return {
      onClick,
    };
  },
});
</script>

<style scoped>
.base-button {
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: transform 120ms ease, opacity 120ms ease;
}

.base-button:not(:disabled):hover {
  transform: translateY(-1px);
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.base-button--primary {
  background-color: var(--color-brand-500);
  color: white;
}

.base-button--secondary {
  background-color: var(--color-surface-alt);
  color: var(--color-text-primary);
}

.base-button--ghost {
  background-color: transparent;
  color: var(--color-brand-600);
  border: 1px solid var(--color-brand-500);
}
</style>
