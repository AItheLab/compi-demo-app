<template>
  <button
    class="base-action-button"
    :class="[`base-action-button--${variant}`, `base-action-button--${size}`]"
    :disabled="disabled"
    type="button"
    :aria-label="label"
    @click="onClick"
  >
    <BaseIcon class="base-action-button__icon" :name="icon" :size="iconSize" />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';
import BaseIcon, { type BaseIconProps } from './BaseIcon.vue';

export interface BaseActionButtonProps {
  label: string;
  icon: BaseIconProps['name'];
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const ICON_SIZES: Record<NonNullable<BaseActionButtonProps['size']>, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

export default defineComponent({
  name: 'BaseActionButton',
  components: {
    BaseIcon,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String as PropType<BaseActionButtonProps['icon']>,
      required: true,
    },
    variant: {
      type: String as PropType<BaseActionButtonProps['variant']>,
      default: 'primary',
    },
    size: {
      type: String as PropType<BaseActionButtonProps['size']>,
      default: 'md',
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
    const iconSize = computed(() => ICON_SIZES[props.size ?? 'md']);

    const onClick = (event: MouseEvent): void => {
      if (props.disabled) {
        return;
      }

      emit('click', event);
    };

    return {
      iconSize,
      onClick,
    };
  },
});
</script>

<style scoped>
.base-action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--radius-full);
  padding: 0;
  cursor: pointer;
  transition: transform 120ms ease, opacity 120ms ease;
}

.base-action-button:hover {
  transform: translateY(-1px);
}

.base-action-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.base-action-button--primary {
  background-color: var(--color-brand-500);
  color: white;
}

.base-action-button--secondary {
  background-color: var(--color-surface-alt);
  color: var(--color-text-primary);
}

.base-action-button--ghost {
  background-color: transparent;
  color: var(--color-brand-600);
  border: 1px solid var(--color-brand-500);
}

.base-action-button--sm {
  width: var(--space-6);
  height: var(--space-6);
}

.base-action-button--md {
  width: calc(var(--space-6) + var(--space-2));
  height: calc(var(--space-6) + var(--space-2));
}

.base-action-button--lg {
  width: calc(var(--space-6) + var(--space-4));
  height: calc(var(--space-6) + var(--space-4));
}

.base-action-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.base-action-button :deep(.base-icon) {
  color: currentColor;
}
</style>
