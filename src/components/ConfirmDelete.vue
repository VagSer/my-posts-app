<script setup>
import usePostsStore from '../stores/posts';

const postsStore = usePostsStore()

const closeWindow = () => {
  document.querySelector('#confirmDelete').close()
  postsStore.editablePost = null
}

const deletePost = () => {
  postsStore.deletePost(postsStore.editablePost.id)
  closeWindow()
}
</script>

<template>
  <dialog 
    id="confirmDelete"
    class="modalWindow"
    @click="closeWindow"
  >
    <form
      id="confirmDeleteForm"
      class="modalForm"
      @click.stop
      @submit.prevent
    >
      <h3>Вы уверены, что хотите удалить этот пост?</h3>
      <footer>
        <AppButton 
          variant="success"
          type="submit"
          label="Да"
          @click="deletePost"
        />
        <AppButton 
          variant="danger"
          label="Нет"
          @click="closeWindow"
        />
      </footer>
    </form>
  </dialog>
</template>

<style>
#confirmDelete {
  width: 400px;
  text-align: center;
}

#confirmDeleteForm {
  display: flex;
  align-items: center;
  
  & footer {
    display: flex;
    justify-content: space-between;
    width: 80%;

    & > button {
      width: 40%;
    }
  }
}
</style>