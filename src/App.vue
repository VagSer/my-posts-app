<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import PostList from './components/PostList.vue';
import usePostsStore from './stores/posts';
import Loader from './components/Loader.vue';
import PostEdit from './components/PostEdit.vue';
import PostNew from './components/PostNew.vue';
import ConfirmDelete from './components/ConfirmDelete.vue';

const postsStore = usePostsStore();

onMounted(() => {
  postsStore.fetchPosts()
})
</script>

<template>
  <Header />
  <PostEdit />
  <PostNew />
  <ConfirmDelete />
  <Loader v-if="postsStore.isLoading"/>
  <PostList v-else/>
</template>

<style scoped>
</style>
