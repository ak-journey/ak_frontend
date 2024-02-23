<script setup>
const props = defineProps(["post"]);
import { useUserStore } from '#imports';
const userStore = useUserStore();
</script>

<template>
  <div class="post">
    <div class="card">
      <div class="card-image">
        <figure class="image is-16by9">
          <img :src="post.image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="post.icon" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ post.author }}</p>
            <p class="subtitle is-6">{{ post.link }}</p>
          </div>
        </div>

        <div class="content">
          {{ post.text }}
          <div class="is-flex is-flex-wrap-wrap"><a v-for="tag in post.tags">{{ tag }}&nbsp;</a></div>.
          <br>
          <time datetime="2016-1-1">{{ post.date }}</time>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <span class="icon-text">
                <span class="icon"><i class="fa-solid fa-eye"></i></span>
                <span>83</span>
              </span>
            </div>
            <div class="level-item">
              <span class="icon-text">
                <span class="icon"><i class="fa-solid fa-thumbs-up"></i></span>
                <span>5</span>
              </span>
            </div>
          </div>
        </nav>
        <footer class="card-footer">
          <NuxtLink :to="`/blog/1`" class="card-footer-item">View</NuxtLink>
          <template v-if="userStore.user.isAuthenticated">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </template>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .post {
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
} */
</style>