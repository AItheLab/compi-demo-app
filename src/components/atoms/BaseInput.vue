<template>
  <div class="base-input" :class="{ 'base-input--search': search, 'base-input--disabled': disabled }">
    <BaseIcon v-if="search" class="base-input__icon" name="search" :size="16" />
    <input
      class="base-input__field"
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
.base-input {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  border: 1px solid var(--color-surface-alt);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background-color: white;
}

.base-input:focus-within {
  outline: 2px solid color-mix(in srgb, var(--color-brand-500) 35%, transparent);
  border-color: var(--color-brand-500);
}

.base-input__field {
  width: 100%;
  border: none;
  padding: 0;
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background-color: transparent;
}

.base-input__field:focus {
  outline: none;
}

.base-input--disabled {
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border-color: var(--color-surface-alt);
}

.base-input--disabled .base-input__field {
  color: var(--color-text-secondary);
  cursor: not-allowed;
}

.base-input--disabled .base-input__field::placeholder {
  color: var(--color-text-secondary);
}
</style>
