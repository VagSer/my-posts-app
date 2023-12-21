<script setup>
import usePostsStore from '../stores/posts';

const postsStore = usePostsStore()

const sortOptions = [
  {value: '---', text: 'Умолчанию'},
  {value: 'title', text: 'Названию'},
  {value: 'body', text: 'Содержанию'},
  {value: 'userId', text: 'Автору'},
]
</script>

<template>
  <search class="search">
      <input 
        type="text"
        placeholder="Поиск"
        v-model="postsStore.searchValue"
      />
      <p class="option">Сортировать по</p>
      <select v-model="postsStore.sortBy">
        <option class="option"
          v-for="option of sortOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </search>
</template>

<style scoped>
.option {
  display: flex;
  align-items: center;
}

.search {
    display: none;
    height: 100%;
    color: var(--text-color);
    background-color: var(--header-bg-color);
    font-size: inherit;
      & input {
        border: 1px solid var(--text-color);
        background-color: var(--post-bg-color);
        font-size: inherit;
        color: inherit;
        &::placeholder {
          color: inherit;
        }
      }

      & select {
        border: 1px solid var(--text-color);
        background-color: inherit;
        color: inherit;
        font-size: inherit;
        & .option {
          background-color: var(--post-bg-color);
          color: inherit; 
        }
      }
  }

@media (width > 640px) {
  .search {
    display: flex;
  }
}
</style>