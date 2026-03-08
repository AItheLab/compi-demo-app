<template>
  <label class="base-checkbox__wrapper" :class="{ 'base-checkbox--disabled': disabled }">
    <input
      class="base-checkbox__input"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />
    <span class="base-checkbox__box">
      <BaseIcon v-if="modelValue" class="base-checkbox__icon" name="check" :size="14" />
    </span>
    <span v-if="label" class="base-checkbox__label">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseIcon from './BaseIcon.vue';

export interface BaseCheckboxProps {
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'BaseCheckbox',
  components: {
    BaseIcon,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    'update:modelValue': (value: boolean) => typeof value === 'boolean',
  },
  setup(_, { emit }) {
    const onChange = (event: Event): void => {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.checked);
    };

    return {
      onChange,
    };
  },
});
</script>

<style scoped>
.base-checkbox__wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  user-select: none;
}

.base-checkbox__wrapper.base-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.base-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.base-checkbox__box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-surface-alt);
  border-radius: var(--radius-sm);
  background-color: white;
  transition: all 0.15s ease-in-out;
}

.base-checkbox__icon {
  color: white;
}

.base-checkbox__input:checked + .base-checkbox__box {
  background-color: var(--color-brand-500);
  border-color: var(--color-brand-500);
}

.base-checkbox__input:focus + .base-checkbox__box {
  outline: 2px solid color-mix(in srgb, var(--color-brand-500) 35%, transparent);
  outline-offset: 2px;
}

.base-checkbox__wrapper.base-checkbox--disabled .base-checkbox__box {
  background-color: var(--color-surface);
  border-color: var(--color-surface-alt);
}

.base-checkbox__label {
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  line-height: 1.4;
}

.base-checkbox--disabled .base-checkbox__label {
  color: var(--color-text-secondary);
}
</style>
