<script setup>
import { useAppsStore } from "./stores/appsStore.js";
import { useUserStore } from "./stores/userStore";
const appsStore = useAppsStore();
const userStore = useUserStore();
onMounted(() => {
  appsStore.initStore();
  userStore.initStore();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>