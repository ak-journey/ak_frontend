<script setup>
const router = useRouter();
import { useUserStore } from '#imports';
import { useAppsStore } from '#imports';

const userStore = useUserStore();
const appsStore = useAppsStore();

const isActive = ref(true);
const cancelLogin = () => {
  isActive.value = false;
  router.back();
}

const email = ref('');
const password = ref('');
const errors = ref([]);

const submitForm = async () => {
  //console.log("submit login form");
  errors.value = [];
  email.value = email.value.trim();
  if (email.value === '') {
    errors.value.push('Email can not be empty');
  }
  if (password.value === '') {
    errors.value.push('Password is missing');
  }
  if (errors.value.length === 0) {
    try {
      let data = await $fetch('http://127.0.0.1:8000/api/login/', {
        method: "POST",
        body: {
          email: email.value,
          password: password.value,
        }
      });
      //console.log("First fetch: ", data);
      userStore.setToken(data);

      data = await $fetch('http://127.0.0.1:8000/api/me/', {
        method: 'GET',
        headers: { Authorization: `Bearer ${userStore.user.access}` }
      });
      //console.log("Second fetch: ", data);
      userStore.setUserInfo(data);
      navigateTo(router.back());
    } catch (error) {
      if (error.responce) {
        for (const property in error.responce._data) {
          errors.value.push(`${property}: ${error.responce._data[property]}`);
        }
        console.log(JSON.stringify(error.responce));
      } else if (error.message) {
        errors.value.push('Something went wrong. Please try again');
        console.log(JSON.stringify(error));
      }
    }
  }
}
</script>

<template>
  <div class="modal" :class="{ ' is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form @submit.prevent="submitForm">
        <header class="modal-card-head">

          <p class="modal-card-title">Log In</p>

        </header>
        <section class="modal-card-body">

          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input v-model="email" class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input v-model="password" class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <div v-if="errors.length">
            <p class="has-text-danger" v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">
                Submit
              </button>
            </p>
            <p class="control">
              <a @click="cancelLogin" class="button is-light">
                Cancel
              </a>
            </p>
          </div>
        </footer>
      </form>
    </div>
  </div>
</template>