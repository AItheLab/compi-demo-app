<template>
  <textarea
    class="base-text-area"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    @input="onInput"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export interface BaseTextAreaProps {
  modelValue: string;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
}

export default defineComponent({
  name: 'BaseTextArea',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 4,
    },
  },
  emits: {
    'update:modelValue': (value: string) => typeof value === 'string',
  },
  setup(_, { emit }) {
    const onInput = (event: Event): void => {
      const target = event.target as HTMLTextAreaElement;
      emit('update:modelValue', target.value);
    };

    return {
      onInput,
    };
  },
});
</script>

<style scoped>
.base-text-area {
  display: block;
  width: 100%;
  min-width: calc(var(--space-6) * 12);
  border: 1px solid var(--color-surface-alt);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background-color: white;
  resize: vertical;
  min-height: calc(var(--space-4) * 4);
}

.base-text-area:focus {
  outline: 2px solid color-mix(in srgb, var(--color-brand-500) 35%, transparent);
  border-color: var(--color-brand-500);
}

.base-text-area:disabled {
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border-color: var(--color-surface-alt);
  cursor: not-allowed;
}

.base-text-area:disabled::placeholder {
  color: var(--color-text-secondary);
}
</style>
