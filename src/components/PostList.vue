<script setup>
import { computed } from 'vue';
import usePostsStore from '../stores/posts';
import PostListItem from './PostListItem.vue';

const postsStore = usePostsStore()

const showEmptyMessage = computed(() => 
  postsStore.posts.length && !postsStore.searchSortedPosts.length
)
</script>

<template>
  <h2
    v-if="showEmptyMessage"
    class="emptyMessage"
  >
    Постов с такими данными нет :(
  </h2>
  <h2
    v-if="!postsStore.posts.length"
    class="noPosts"
  >
    Постов нет. Самое время что-нибудь написать :)
  </h2>
  <section class="list">
    <PostListItem 
      v-for="post of postsStore.searchSortedPosts"
      :key="post.id"
      :post="post"
    />
  </section>
</template>

<style>
.emptyMessage,
.noPosts {
  text-align: center;
  margin-top: 8px;
}

.emptyMessage {
  color: darkred;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 20px;
  padding: 20px;
}
</style>