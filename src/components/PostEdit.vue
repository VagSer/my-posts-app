<script setup>
import usePostsStore from '../stores/posts';

const postsStore = usePostsStore()

const closeWindow = () => {
  document.querySelector('#editedPost').close()
  postsStore.editablePost = null
}

const editPost = () => {
  if (postsStore.editablePost.title && postsStore.editablePost.body) {
    postsStore.updatePost({...postsStore.editablePost})
    closeWindow()
  }
}
</script>

<template>
  <dialog
    id="editedPost"
    class="modalWindow"
    @click="closeWindow"
  >
    <form
      v-if="postsStore.editablePost?.id"
      id="editPostForm"
      class="modalForm"
      @click.stop
      @submit.prevent="editPost"
    >
      <h2>Редактирование</h2>
      <input 
        type="text"
        v-model="postsStore.editablePost.title"
        required
      />
      <textarea 
        v-model="postsStore.editablePost.body"
        required
      />
      <footer class="buttonPanel">
        <AppButton 
          variant="success"
          label="Принять"
          type="submit"
        />
        <AppButton 
          variant="danger"
          label="Отменить"
          @click="closeWindow"
        />
      </footer>
    </form>
  </dialog>
</template>