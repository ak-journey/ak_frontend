<script setup>
import { useUserStore } from '#imports';
const userStore = useUserStore();
const posts = [
  {
    image: "https://wallpapersmug.com/download/1280x720/0d0416/mountains-adorable-lake-nature.jpg",
    icon: userStore.user.gravatar,
    author: "John Smith",
    link: "@johnsmith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    tags: ["@bulmaio", "#css", "responsive"],
    date: "11:09 PM - 1 Jan 2016",
    views: 94,
    likes: 4,
  },
  {
    image: "https://wallpapersmug.com/download/1280x800/9904f8/camel-men-in-a-cosmic-odyssey-night.jpg",
    icon: userStore.user.gravatar,
    author: "John Smith",
    link: "@johnsmith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    tags: ["@bulmaio", "#css", "responsive", "#flexbox", "html"],
    date: "11:09 PM - 1 Jan 2016",
    views: 94,
    likes: 4,
  },
  {
    image: "https://wallpapersmug.com/download/1280x800/dca2e8/dog-and-autumn-close-up.jpg",
    icon: userStore.user.gravatar,
    author: "John Smith",
    link: "@johnsmith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    tags: ["@bulmaio", "#css", "responsive"],
    date: "11:09 PM - 1 Jan 2016",
    views: 94,
    likes: 4,
  },
  {
    image: "https://bulma.io/images/placeholders/1280x720.png",
    icon: "https://bulma.io/images/placeholders/96x96.png",
    author: "John Smith",
    link: "@johnsmith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    tags: ["@bulmaio", "#css", "responsive"],
    date: "11:09 PM - 1 Jan 2016",
    views: 94,
    likes: 4,
  },
  {
    image: "https://bulma.io/images/placeholders/1280x720.png",
    icon: "https://bulma.io/images/placeholders/96x96.png",
    author: "John Smith",
    link: "@johnsmith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    tags: ["@bulmaio", "#css", "responsive"],
    date: "11:09 PM - 1 Jan 2016",
    views: 94,
    likes: 4,
  },
  {
    image: "https://bulma.io/images/placeholders/1280x720.png",
    icon: "https://bulma.io/images/placeholders/96x96.png",
    author: "John Smith",
    link: "@johnsmith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    tags: ["@bulmaio", "#css", "responsive"],
    date: "11:09 PM - 1 Jan 2016",
    views: 94,
    likes: 4,
  },
  {
    image: "https://bulma.io/images/placeholders/1280x720.png",
    icon: "https://bulma.io/images/placeholders/96x96.png",
    author: "John Smith",
    link: "@johnsmith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    tags: ["@bulmaio", "#css", "responsive"],
    date: "11:09 PM - 1 Jan 2016",
    views: 94,
    likes: 4,
  },
]
</script>

<template>
  <div>
    <!-- Main container -->
    <nav class="level p-4">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>123</strong> posts
          </p>
        </div>
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Find a post">
            </p>
            <p class="control">
              <button class="button">
                Search
              </button>
            </p>
          </div>
        </div>
      </div>

      <!-- Right side -->
      <template v-if="userStore.user.isAuthenticated">
        <div class="level-right">
          <p class="level-item"><strong>All</strong></p>
          <p class="level-item"><a>Published</a></p>
          <p class="level-item"><a>Drafts</a></p>
          <p class="level-item"><a>Deleted</a></p>
          <p class="level-item"><a class="button is-success">New</a></p>
        </div>
      </template>
    </nav>
    <div class="posts">
      <BlogPostCard v-for="post in posts" :post="post"></BlogPostCard>
    </div>
  </div>
</template>

<style scoped>
.posts {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: #fff;
  color: #444;
}
</style>