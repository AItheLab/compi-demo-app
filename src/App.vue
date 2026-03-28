<template>
  <div class="page">
    <NavigationBar
      logo="Compi DS"
      :user-name="currentUser.name"
      :user-avatar-url="currentUser.avatarUrl"
      @search="onSearch"
    />

    <main class="main">
      <!-- Intro -->
      <BaseCard variant="flat">
        <div class="intro">
          <div>
            <h1 class="intro__title">Design System Showcase</h1>
            <p class="intro__sub">All components from the Compi DS atomic design library — atoms, molecules &amp; organisms.</p>
          </div>
          <div class="intro__tags">
            <BaseTag label="v1.0" tone="brand" />
            <BaseTag label="Atomic Design" tone="neutral" variant="outline" />
            <BaseTag label="Vue 3" tone="neutral" variant="outline" />
          </div>
        </div>
      </BaseCard>

      <!-- Alerts -->
      <section>
        <h2 class="section-heading">Alerts</h2>
        <div class="grid-2">
          <AlertBanner title="Success" message="Your changes have been saved successfully." tone="success" />
          <AlertBanner title="Warning" message="Your session will expire in 10 minutes." tone="warning" />
          <AlertBanner title="Danger" message="Something went wrong. Please try again." tone="danger" />
          <AlertBanner title="Info" message="Este Design System usa Atomic Design y tokens CSS." tone="info" />
        </div>
      </section>

      <!-- Buttons -->
      <section>
        <h2 class="section-heading">Buttons &amp; Actions</h2>
        <div class="grid-2">
          <BaseCard title="Button variants" variant="outlined">
            <div class="row-wrap">
              <BaseButton label="Primary" variant="primary" />
              <BaseButton label="Secondary" variant="secondary" />
              <BaseButton label="Ghost" variant="ghost" />
              <BaseButton label="Disabled" variant="primary" :disabled="true" />
            </div>
          </BaseCard>
          <BaseCard title="Icon action buttons" variant="outlined">
            <div class="row-wrap">
              <BaseActionButton label="Search sm" icon="search" variant="primary" size="sm" />
              <BaseActionButton label="User md" icon="user" variant="primary" size="md" />
              <BaseActionButton label="Check lg" icon="check" variant="primary" size="lg" />
              <BaseActionButton label="Alert secondary" icon="alert" variant="secondary" size="md" />
              <BaseActionButton label="Info ghost" icon="info" variant="ghost" size="md" />
              <BaseActionButton label="Disabled" icon="search" variant="primary" size="md" :disabled="true" />
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Tags & Badges -->
      <section>
        <h2 class="section-heading">Tags &amp; Badges</h2>
        <div class="grid-2">
          <BaseCard title="Tags — default &amp; outline" variant="outlined">
            <div class="row-wrap" style="margin-bottom: var(--space-3)">
              <BaseTag label="Neutral" tone="neutral" />
              <BaseTag label="Brand" tone="brand" />
              <BaseTag label="Success" tone="success" />
              <BaseTag label="Warning" tone="warning" />
              <BaseTag label="Danger" tone="danger" />
            </div>
            <div class="row-wrap">
              <BaseTag label="Neutral" tone="neutral" variant="outline" />
              <BaseTag label="Brand" tone="brand" variant="outline" />
              <BaseTag label="Success" tone="success" variant="outline" />
              <BaseTag label="Warning" tone="warning" variant="outline" />
              <BaseTag label="Danger" tone="danger" variant="outline" />
            </div>
          </BaseCard>
          <BaseCard title="Badges" variant="outlined">
            <div class="row-wrap">
              <BaseBadge label="Info" tone="info" />
              <BaseBadge label="Success" tone="success" />
              <BaseBadge label="Warning" tone="warning" />
              <BaseBadge label="Danger" tone="danger" />
              <BaseBadge label="Error" tone="error" />
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Cards -->
      <section>
        <h2 class="section-heading">Cards</h2>
        <div class="grid-3">
          <BaseCard title="Elevated" variant="elevated">
            <p class="card-body-text">Box-shadow gives depth. Best for primary content areas.</p>
            <template #footer>
              <BaseButton label="Action" variant="ghost" />
            </template>
          </BaseCard>
          <BaseCard title="Outlined" variant="outlined">
            <p class="card-body-text">Border defines the boundary. Good for secondary groupings.</p>
            <template #footer>
              <BaseButton label="Action" variant="ghost" />
            </template>
          </BaseCard>
          <BaseCard title="Flat" variant="flat">
            <p class="card-body-text">Surface background, no shadow. Use for subtle containers.</p>
            <template #footer>
              <BaseButton label="Action" variant="ghost" />
            </template>
          </BaseCard>
        </div>
      </section>

      <!-- Form controls -->
      <section>
        <h2 class="section-heading">Form Controls</h2>
        <div class="grid-2">
          <BaseCard title="Inputs" variant="outlined">
            <div class="col-stack">
              <BaseInput v-model="formName" label="Full name" placeholder="e.g. Alicia Vega" />
              <BaseInput v-model="formEmail" label="Email" placeholder="you@example.com" type="email" />
              <BaseInput v-model="formSearch" placeholder="Search…" :search="true" />
              <BaseInput v-model="formDisabled" label="Disabled" placeholder="Cannot edit" :disabled="true" />
            </div>
          </BaseCard>
          <BaseCard title="Textarea &amp; Checkboxes" variant="outlined">
            <div class="col-stack">
              <BaseTextArea v-model="formNote" placeholder="Write a note…" :rows="4" />
              <div class="col-stack-sm">
                <BaseCheckbox v-model="check1" label="Send email notifications" />
                <BaseCheckbox v-model="check2" label="Enable two-factor authentication" />
                <BaseCheckbox v-model="check3" label="Disabled option" :disabled="true" />
              </div>
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Team Members -->
      <section>
        <h2 class="section-heading">Team Members</h2>
        <UserList :users="filteredUsers" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import AlertBanner from '@/components/molecules/AlertBanner.vue';
import NavigationBar from '@/components/organisms/NavigationBar.vue';
import UserList from '@/components/organisms/UserList.vue';
import BaseActionButton from '@/components/atoms/BaseActionButton.vue';
import BaseBadge from '@/components/atoms/BaseBadge.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';
import BaseCard from '@/components/atoms/BaseCard.vue';
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue';
import BaseInput from '@/components/atoms/BaseInput.vue';
import BaseTag from '@/components/atoms/BaseTag.vue';
import BaseTextArea from '@/components/atoms/BaseTextArea.vue';
import type { User } from '@/types/user';

const USERS: User[] = [
  { id: 'u1', name: 'Alicia Vega', role: 'Product Designer', avatarUrl: 'https://i.pravatar.cc/80?img=32' },
  { id: 'u2', name: 'Diego Leon', role: 'Frontend Engineer', avatarUrl: 'https://i.pravatar.cc/80?img=59' },
  { id: 'u3', name: 'Marta Ruiz', role: 'UX Researcher', avatarUrl: 'https://i.pravatar.cc/80?img=47' },
];

export default defineComponent({
  name: 'App',
  components: {
    AlertBanner,
    NavigationBar,
    UserList,
    BaseActionButton,
    BaseBadge,
    BaseButton,
    BaseCard,
    BaseCheckbox,
    BaseInput,
    BaseTag,
    BaseTextArea,
  },
  setup() {
    const searchQuery = ref('');
    const currentUser = USERS[0];

    const formName = ref('');
    const formEmail = ref('');
    const formSearch = ref('');
    const formDisabled = ref('locked value');
    const formNote = ref('');
    const check1 = ref(true);
    const check2 = ref(false);
    const check3 = ref(false);

    const filteredUsers = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      if (!query) return USERS;
      return USERS.filter((user) => user.name.toLowerCase().includes(query));
    });

    const onSearch = (value: string): void => {
      searchQuery.value = value;
    };

    return {
      currentUser,
      filteredUsers,
      onSearch,
      formName,
      formEmail,
      formSearch,
      formDisabled,
      formNote,
      check1,
      check2,
      check3,
    };
  },
});
</script>

<style scoped>
.page {
  max-width: 72rem;
  margin: 0 auto;
  padding: var(--space-6) var(--space-6) calc(var(--space-6) * 2);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  margin-top: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.section-heading {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 var(--space-3);
}

.intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.intro__title {
  margin: 0 0 var(--space-1);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.intro__sub {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.intro__tags {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.row-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
}

.col-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.col-stack-sm {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.card-body-text {
  margin: 0;
  font-size: var(--font-size-sm);
}
</style>
