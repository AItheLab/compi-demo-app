<template>
  <div class="base-avatar" :style="avatarStyle" :aria-label="name">
    <img v-if="src" :src="src" :alt="name" class="base-avatar__image" />
    <span v-else class="base-avatar__fallback">{{ initials }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type CSSProperties } from 'vue';

export interface BaseAvatarProps {
  name: string;
  src?: string;
  size?: number;
}

export default defineComponent({
  name: 'BaseAvatar',
  props: {
    name: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 40,
    },
  },
  setup(props) {
    const initials = computed(() => {
      const parts = props.name.split(' ').filter(Boolean);

      return parts
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .join('');
    });

    const avatarStyle = computed<CSSProperties>(() => ({
      width: `${props.size}px`,
      height: `${props.size}px`,
      fontSize: `${Math.max(props.size / 2.7, 12)}px`,
    }));

    return {
      initials,
      avatarStyle,
    };
  },
});
</script>

<style scoped>
.base-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background-color: var(--color-surface-alt);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
  overflow: hidden;
}

.base-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.base-avatar__fallback {
  line-height: 1;
}
</style>
