<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :disabled="disabled"
    @input="onInput"
    @keyup.enter="onEnter"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export interface BaseInputProps {
  modelValue: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'search';
  disabled?: boolean;
}

export default defineComponent({
  name: 'BaseInput',
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
  },
  emits: {
    'update:modelValue': (value: string) => typeof value === 'string',
    enter: (value: string) => typeof value === 'string',
  },
  setup(props, { emit }) {
    const onInput = (event: Event): void => {
      if (props.disabled) {
        return;
      }

      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    };

    const onEnter = (event: KeyboardEvent): void => {
      if (props.disabled) {
        return;
      }

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
  border: 1px solid var(--color-surface-alt);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background-color: white;
}

.base-input:focus {
  outline: 2px solid color-mix(in srgb, var(--color-brand-500) 35%, transparent);
  border-color: var(--color-brand-500);
}

.base-input:disabled {
  background-color: var(--color-surface-alt);
  color: var(--color-text-secondary);
  cursor: not-allowed;
  opacity: 0.7;
}

.base-input:disabled::placeholder {
  color: var(--color-text-secondary);
}
</style>
