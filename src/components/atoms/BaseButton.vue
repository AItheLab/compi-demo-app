<template>
  <button class="base-button" :class="[`base-button--${variant}`]" :disabled="disabled" type="button" @click="onClick">
    <BaseIcon v-if="icon && iconPosition === 'left'" class="base-button__icon" :name="icon" />
    <span class="base-button__label">
      <slot>{{ label }}</slot>
    </span>
    <BaseIcon v-if="icon && iconPosition === 'right'" class="base-button__icon" :name="icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import BaseIcon, { type BaseIconProps } from './BaseIcon.vue';

export interface BaseButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  icon?: BaseIconProps['name'];
  iconPosition?: 'left' | 'right';
}

export default defineComponent({
  name: 'BaseButton',
  components: {
    BaseIcon,
  },
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
    icon: {
      type: String as PropType<BaseButtonProps['icon']>,
      default: undefined,
    },
    iconPosition: {
      type: String as PropType<BaseButtonProps['iconPosition']>,
      default: 'left',
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: transform 120ms ease, opacity 120ms ease;
}

.base-button:hover {
  transform: translateY(-1px);
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.base-button--primary {
  background-color: var(--color-primary-500);
  color: white;
}

.base-button--primary:hover {
  background-color: var(--color-primary-600);
}

.base-button--secondary {
  background-color: var(--color-surface-alt);
  color: var(--color-text-primary);
}

.base-button--ghost {
  background-color: transparent;
  color: var(--color-primary-600);
  border: 1px solid var(--color-primary-500);
}

.base-button__icon {
  display: inline-flex;
  align-items: center;
}

.base-button :deep(.base-icon) {
  color: currentColor;
}
</style>
