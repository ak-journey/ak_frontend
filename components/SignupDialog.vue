<script setup>
const router = useRouter();

const isActive = ref(true);
const cancelSignup = () => {
  isActive.value = false;
  router.back();
}

const name = ref('');
const email = ref('');
const password1 = ref('');
const password2 = ref('');
const errors = ref([]);

const submitForm = async () => {
  console.log("submit sign up form");
  errors.value = [];
  await $fetch('http://127.0.0.1:8000/api/accounts/signup/', {
    method: "POST",
    body: {
      name: name.value,
      email: email.value,
      password1: password1.value,
      password2: password2.value,
    }
  }).then(responce => {
    console.log('responce', responce);
  }).catch(error => {
    if (error.responce) {
      for (const property in error.responce._data) {
        errors.value.push(`${property}: ${error.responce._data[property]}`);
      }
      console.log(JSON.stringify(error.responce));
    } else if (error.message) {
      errors.value.push('Something went wrong. Please try again');
      console.log(JSON.stringify(error));
    }
  })
}
</script>

<template>
  <div class="modal" :class="{ ' is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form @submit.prevent="submitForm">
        <header class="modal-card-head">

          <p class="modal-card-title">Sign Up</p>

        </header>
        <section class="modal-card-body">

          <div class="field">
            <p class="control has-icons-left">
              <input v-model="name" class="input" type="text" placeholder="Your name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
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
              <input v-model="password1" class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input v-model="password2" class="input" type="password" placeholder="Repeat password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary">
                Submit
              </a>
            </p>
            <p class="control">
              <a @click="cancelSignup" class="button is-light">
                Cancel
              </a>
            </p>
          </div>
        </footer>
      </form>
    </div>
  </div>
</template>