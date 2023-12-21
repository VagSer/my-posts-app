<script setup>
import { ref } from 'vue';
import usePostsStore from '../stores/posts';

const postsStore = usePostsStore()

const newPost = ref({
  title: '',
  body: '',
})

const closeWindow = () => {
  document.querySelector('#newPost').close()
  newPost.value = {
    title: '',
    body: '',
  }
}

const addPost = () => {
  if (newPost.value.title && newPost.value.body) {
    postsStore.addPost({
      id: Date.now(), ...newPost.value, userId: 0,
    })
    closeWindow()
  }
}
</script>

<template>
  <dialog
    id="newPost"
    class="modalWindow"
    @click="closeWindow"
  >
    <form
      id="newPostForm"
      class="modalForm"
      @click.stop
      @submit.prevent="addPost"
    >
      <h2>Новый пост</h2>
      <input 
        type="text"
        v-model="newPost.title"
        required
      />
      <textarea 
        v-model="newPost.body"
        required
      />
      <footer class="buttonPanel">
        <AppButton 
          variant="success"
          label="Создать"
          type="submit"
        />
        <AppButton 
          variant="danger"
          label="Отменить"
          type="reset"
          @click="closeWindow"
        />
      </footer>
    </form>
  </dialog>
</template>