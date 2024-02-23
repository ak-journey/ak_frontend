<script setup>
const route = useRoute();
import { useAppsStore } from '#imports';
const appsStore = useAppsStore()

const apps = [
  {
    id: 1,
    name: "Reference",
    icon: "fa-solid fa-circle-info fa-xl",
    link: "/reference"
  },
  {
    id: 2,
    name: "Blog",
    icon: "fa-solid fa-blog fa-xl",
    link: "/blog"
  },
  {
    id: 3,
    name: "Camera",
    icon: "fa-solid fa-camera fa-xl",
    link: "/camera"
  },
  {
    id: 4,
    name: "CQuiz",
    icon: "fa-solid fa-person-circle-question fa-xl",
    link: "/cquiz"
  },
];

let activeAppId = ref();
const emit = defineEmits(["activate"]);
function activateApp(id) {
  activeAppId.value = id;
  appsStore.setActiveAppId(id);
  emit("activate", activeAppId.value);
}

/* const getActiveAppId = () => {
  const activeApp = apps.filter(app => route.path.includes(app.link));
  console.log("Active App: ", activeApp);
  return activeApp.id
} */

watch(() => route.path, () => {
  console.log("Route path: ", route.path);
  const filteredApps = apps.filter(app => route.path.includes(app.link));
  if (filteredApps.length) {
    activeAppId.value = filteredApps[0].id;
  } else {
    activeAppId.value = null;
  }
  //console.log("filteredApps: ", filteredApps);
  //if (app) activeAppId.value = app[0].id;
  //activeAppId.value = apps.filter(app => route.path.includes(app.link))[0].id;
  //console.log("Watch activeAppId: ", activeAppId.value);

});

/* watch(routeRef.value, value => {
  console.log("Route: ", routeRef.value.fullPath)
}, { deep: true, immediate: true }) */

/* onMounted(() => {
  activeAppId.value = appsStore.activeApp;
  console.log('AppsList.vue  activeAppId in onMounted = ', activeAppId.value);
}); */
</script>

<template>
  <div class="has-background-white">
    <aside class="menu">
      <p class="menu-label pt-3 pl-3">General</p>
      <ul class="menu-list">
        <li v-for="app in apps" :key="app.id">
          <NuxtLink :to="app.link" @click="activateApp(app.id)" :class="{ ' is-active': activeAppId === app.id }">
            <span class="icon-text">
              <span class="icon"><i :class="app.icon"></i></span>
              <span>{{ app.name }}</span>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
@media (min-width: 769px) and (max-width: 1023px) {
  .menu-list .icon-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.75rem;
  }
}
</style>
