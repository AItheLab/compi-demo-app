<template>
  <div class="base-input__wrapper">
    <label v-if="label" class="base-input__label">{{ label }}</label>
    <BaseIcon v-if="search" class="base-input__icon" name="search" :size="16" />
    <input
      class="base-input"
      :class="{ 'base-input--search': search, 'base-input--with-label': label }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="onInput"
      @keyup.enter="onEnter"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import BaseIcon from './BaseIcon.vue';

export interface BaseInputProps {
  modelValue: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'search';
  disabled?: boolean;
  search?: boolean;
}

export default defineComponent({
  name: 'BaseInput',
  components: {
    BaseIcon,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<BaseInputProps['type']>,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    search: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    'update:modelValue': (value: string) => typeof value === 'string',
    enter: (value: string) => typeof value === 'string',
  },
  setup(_, { emit }) {
    const onInput = (event: Event): void => {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    };

    const onEnter = (event: KeyboardEvent): void => {
      const target = event.target as HTMLInputElement;
      emit('enter', target.value);
    };

    return {
      onInput,
      onEnter,
    };
  },
});
</script>

<style scoped>
.base-input__wrapper {
  position: relative;
  width: 100%;
}

.base-input__label {
  display: block;
  margin-bottom: var(--space-1);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.base-input {
  width: 100%;
  border: 1px solid var(--color-surface-alt);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background-color: white;
}

.base-input--search {
  padding-left: calc(var(--space-3) + var(--space-4));
}

.base-input--with-label {
  margin-top: var(--space-1);
}

.base-input__icon {
  position: absolute;
  left: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.base-input:focus {
  outline: 2px solid color-mix(in srgb, var(--color-brand-500) 35%, transparent);
  border-color: var(--color-brand-500);
}

.base-input:disabled {
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border-color: var(--color-surface-alt);
  cursor: not-allowed;
}

.base-input:disabled::placeholder {
  color: var(--color-text-secondary);
}
</style>
