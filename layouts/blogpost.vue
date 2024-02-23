<script setup>
import { useAppsStore } from "~/stores/appsStore";
import { useUserStore } from "~/stores/userStore";
const appsStore = useAppsStore();
const userStore = useUserStore();

let isVisible = ref(false);
function toggleAppsMenuVisible() {
  isVisible.value = !isVisible.value;
}

const signupClicked = () => {
  navigateTo("/signup");
}
const loginClicked = () => {
  navigateTo("/login");
}
const logoutClicked = () => {
  userStore.removeToken();
}

let appIndex = ref(null);
function makeAppActive(param) {
  appIndex.value = param;
  //console.log("default.vue makeAppActive appIndex = ", appIndex.value);
}

onMounted(() => {
  appIndex.value = appsStore.activeApp;
  //console.log("default.vue onMounted appIndex = ", appIndex.value);
});
</script>

<template>
  <div class="wrapper">

    <div class="app-nav mb-2">
      <UiAppNav @toggleVisible="toggleAppsMenuVisible" @signup="signupClicked" @login="loginClicked"
        @logout="logoutClicked" :appIndex="appIndex">
      </UiAppNav>
    </div>
    <!-- <SignupDialog isSignupActive @cancel="isSignupActive = false"></SignupDialog> -->
    <div class="center-content">
      <div class="left-sidebar has-background-white" :class="{ ' is-hidden-mobile': !isVisible }">
        <UiAppsList @activate="makeAppActive"></UiAppsList>
      </div>
      <div class="center-page">
        <div class="page-content has-background-white">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="bottom-content mt-2">
      <UiTheFooter></UiTheFooter>
    </div>
  </div>
</template>

<style scoped>
.center-content {
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 1fr;
  column-gap: 8px;
}

@media (min-width: 769px) and (max-width: 1023px) {
  .center-content {
    grid-template-columns: 100px auto;
  }
}

@media screen and (max-width: 768px) {
  .center-content {
    grid-template-columns: auto;
  }
}
</style>