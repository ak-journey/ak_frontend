<script setup>

import { useUserStore } from "~/stores/userStore";
const userStore = useUserStore();


const emit = defineEmits(["toggleVisible", "signup", "login", "logout"]);
let isVisible = ref(false);
function toggleMenuVisible() {
  isVisible.value = !isVisible.value;
  emit("toggleVisible");
}
function signupClicked() {
  //console.log("emit signup in AppNav")
  emit("signup");
}
const loginClicked = () => {
  //console.log("emit login in AppNav");
  emit("login");
}
const logoutClicked = () => {
  emit("logout");
}

let isActive = ref(false);
function toggleNavActive() {
  isActive.value = !isActive.value;
}

/* const appIndex = ref();
let appMenu = ref([]);
let appActiveMenuItem = ref(null);
const props = defineProps(["appIndex"]); */

/* function makeMenuItemActive(id) {
  appsStore.setAppsMenuItems(id);
  appActiveMenuItem.value = id;
  console.log("appsStore.appsMenuItems = ", appsStore.appsMenuItems, "id = ", id);
} */

/* onMounted(() => {
  appIndex.value = props.appIndex;
  appMenu.value = appsStore.activeMenu;
  appActiveMenuItem.value = appsStore.activeMenuItem;
  appMenu.value = appsStore.activeMenu;
  console.log("AppNav.vue onMounted appsStore.appsMenuItems = ", appsStore.appsMenuItems);
  console.log("AppNav.vue onMounted appActiveMenuItem = ", appActiveMenuItem.value);
  console.log("AppNav appsStore.getActiveApp = ", appsStore.getActiveApp);
}); */

/* onUpdated(() => {
  appIndex.value = props.appIndex;
  appMenu.value = appsStore.activeMenu;
  appActiveMenuItem.value = appsStore.activeMenuItem;
  console.log("AppNav.vue onUpdated appIndex = ", appIndex.value);
  console.log("AppNav.vue onUpdated appMenu = ", appMenu.value);
  console.log("AppNav.vue onUpdated appsStore.appsMenuItems = ", appsStore.appsMenuItems);
  console.log("AppNav.vue onUpdated appActiveMenuItem = ", appActiveMenuItem.value);
}); */

/* watch(appIndex, () => {
  const menu = appsStore.activeMenu;
  console.log("Menu inside watch: ", menu);
  const id = appsStore.activeMenuItem;
  console.log("Active menu item inside watch: ", id);
  if (menu) {
    const menuItem = menu.filter(item => item.id === id);
    console.log("Active menu item inside watch: ", menuItem);
    console.log("Active menu item link inside watch: ", menuItem[0].link);
    navigateTo(menuItem[0].link);
  }
}); */
</script>
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button"
        class="navbar-burger toggler ml-0 is-hidden-tablet has-text-white has-text-centered has-text-weight-bold"
        aria-label="menu" aria-expanded="false" @click="toggleMenuVisible"><template v-if="isVisible">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </template>
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path
              d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
          </svg>
        </template>
      </a>
      <NuxtLink class="navbar-item" to="/">
        <img src="~/assets/images/logo.png" />
      </NuxtLink>

      <a role="button" class="navbar-burger pt-4 has-text-centered has-text-weight-bold"
        :class="{ ' is-active': isActive }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
        @click="toggleNavActive">
        <template v-if="isActive">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </template>
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </template>

      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ ' is-active is-pulled-right': isActive }">
      <div class="navbar-start">
        <!-- <NuxtLink v-for="menuItem in appMenu" :to="menuItem.link" :key="menuItem.id" class="navbar-item" :class="{
          ' has-background-primary has-text-white':
            appActiveMenuItem === menuItem.id,
        }" @click="makeMenuItemActive(menuItem.id)">{{ menuItem.name }}</NuxtLink> -->
      </div>

      <div class="navbar-end">
        <template v-if="userStore.user.isAuthenticated">
          <div class="navbar-item">
            <img :src="userStore.user.gravatar" alt="" />
          </div>
          <div class="navbar-item">
            <p class="has-text-weight-bold">{{ userStore.user.name }}</p>
          </div>
          <div class="navbar-item">
            <NuxtLink @click="logoutClicked" class="button is-primary">
              <strong>Log out</strong>
            </NuxtLink>
          </div>
        </template>
        <template v-else>
          <div class="navbar-item">
            <NuxtLink @click="signupClicked" class="button is-primary">
              <strong>Sign up</strong>
            </NuxtLink>
          </div>
          <div class="navbar-item">
            <NuxtLink @click="loginClicked" class="button is-light"> Log in </NuxtLink>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>