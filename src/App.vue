<template>
  <div class="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
    <!-- COMPI-FLOW-TEST-MARKER: v1 -->
    <NavigationBar
      logo="Compi DS"
      :user-name="currentUser.name"
      :user-avatar-url="currentUser.avatarUrl"
      @search="onSearch"
    />

    <main class="mt-8 flex flex-1 flex-col gap-6">
      <AlertBanner
        title="Demo Environment"
        message="Este Design System usa Atomic Design, tokens CSS y componentes tipados."
        tone="info"
      />

      <UserList :users="filteredUsers" />
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import AlertBanner from '@/components/molecules/AlertBanner.vue';
import NavigationBar from '@/components/organisms/NavigationBar.vue';
import UserList from '@/components/organisms/UserList.vue';
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
  },
  setup() {
    const searchQuery = ref('');
    const currentUser = USERS[0];

    const filteredUsers = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();

      if (!query) {
        return USERS;
      }

      return USERS.filter((user) => user.name.toLowerCase().includes(query));
    });

    const onSearch = (value: string): void => {
      searchQuery.value = value;
    };

    return {
      currentUser,
      filteredUsers,
      onSearch,
    };
  },
});
</script>
