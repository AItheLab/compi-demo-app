<template>
  <section class="alert-banner" :class="[`alert-banner--${tone}`]" role="alert">
    <BaseIcon class="alert-banner__icon" :name="iconName" :size="18" />
    <div class="alert-banner__content">
      <strong class="alert-banner__title">{{ title }}</strong>
      <p class="alert-banner__message">{{ message }}</p>
    </div>
    <BaseBadge class="alert-banner__badge" :label="toneLabel" :tone="tone" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';
import BaseBadge from '@/components/atoms/BaseBadge.vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';

export interface AlertBannerProps {
  title: string;
  message: string;
  tone?: 'info' | 'success' | 'warning' | 'danger';
}

export default defineComponent({
  name: 'AlertBanner',
  components: {
    BaseBadge,
    BaseIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    tone: {
      type: String as PropType<AlertBannerProps['tone']>,
      default: 'info',
    },
  },
  setup(props) {
    const iconName = computed(() => (props.tone === 'success' ? 'check' : props.tone === 'info' ? 'info' : 'alert'));
    const toneLabel = computed(() => props.tone.charAt(0).toUpperCase() + props.tone.slice(1));

    return {
      iconName,
      toneLabel,
    };
  },
});
</script>

<style scoped>
.alert-banner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-3);
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-4);
  background-color: white;
  border: 1px solid var(--color-surface-alt);
}

.alert-banner__title,
.alert-banner__message {
  display: block;
}

.alert-banner__message {
  margin: var(--space-1) 0 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.alert-banner--info {
  border-left: 4px solid var(--color-info);
}

.alert-banner--success {
  border-left: 4px solid var(--color-success);
}

.alert-banner--warning {
  border-left: 4px solid var(--color-warning);
}

.alert-banner--danger {
  border-left: 4px solid var(--color-danger);
}
</style>
