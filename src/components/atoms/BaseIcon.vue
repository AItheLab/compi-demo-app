<template>
  <span class="base-icon" :style="iconStyle" :aria-label="name" role="img">{{ resolvedIcon }}</span>
</template>

<script lang="ts">
import { computed, defineComponent, type CSSProperties, type PropType } from 'vue';

export interface BaseIconProps {
  name: 'search' | 'user' | 'alert' | 'check' | 'info';
  size?: number;
}

const ICONS: Record<BaseIconProps['name'], string> = {
  search: '?',
  user: '@',
  alert: '!',
  check: 'v',
  info: 'i',
};

export default defineComponent({
  name: 'BaseIcon',
  props: {
    name: {
      type: String as PropType<BaseIconProps['name']>,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props) {
    const resolvedIcon = computed(() => ICONS[props.name]);
    const iconStyle = computed<CSSProperties>(() => ({
      fontSize: `${props.size}px`,
      lineHeight: 1,
    }));

    return {
      resolvedIcon,
      iconStyle,
    };
  },
});
</script>

<style scoped>
.base-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
}
</style>
