<script setup>
import usePostsStore from '../stores/posts';

const postsStore = usePostsStore()

defineProps({
  post: {
    type: Object,
    required: true,
  }
})

const actionPost = (action, post) => {
  document.querySelector(action).showModal()
  postsStore.editablePost = {...post}
}
</script>

<template>
  <article class="post">
    <header>
      <div class="titleAndAuthor">
        <h2>{{ post.title }}</h2>
        <span class="author">Author: #{{ post.userId }}</span>
      </div>
      <div class="buttonPanel">
        <AppButton 
          label="Редактировать"
          @click="actionPost('#editedPost', post)"
        />
        <AppButton 
          label="Удалить"
          variant="danger"
          @click="actionPost('#confirmDelete', post)"
        />
      </div>
    </header>
    <p>{{ post.body }}</p>
  </article>
</template>

<style>
.post {
  box-shadow: 0 0px 4px 0px black;
  background-color: var(--post-bg-color);
  color: var(--text-color);
  width: min(90vw, 600px);
  padding: 8px;

  & header {
    display: flex;
    flex-direction: row;

    & .titleAndAuthor {
      width: 40%;
    }
  }

  & .author {
    display: flex;
    color: gray;
    justify-content: flex-start;
    margin: 4px 0;
  }
}
</style>