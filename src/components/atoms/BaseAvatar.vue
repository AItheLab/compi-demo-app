<template>
  <div class="base-avatar" :style="avatarStyle" :aria-label="name">
    <img v-if="src" :src="src" :alt="name" class="base-avatar__image" />
    <BaseIcon v-else-if="iconName" class="base-avatar__icon" :name="iconName" :size="iconSize" />
    <span v-else class="base-avatar__fallback">{{ initials }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type CSSProperties, type PropType } from 'vue';
import BaseIcon, { type BaseIconProps } from './BaseIcon.vue';

export interface BaseAvatarProps {
  name: string;
  src?: string;
  size?: number;
  iconName?: BaseIconProps['name'];
}

export default defineComponent({
  name: 'BaseAvatar',
  components: {
    BaseIcon,
  },
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
    iconName: {
      type: String as PropType<BaseIconProps['name']>,
      default: undefined,
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

    const iconSize = computed(() => Math.max(props.size / 2.4, 14));

    return {
      initials,
      avatarStyle,
      iconSize,
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

.base-avatar__icon {
  color: inherit;
}
</style>
