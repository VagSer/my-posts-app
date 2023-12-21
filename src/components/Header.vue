<script setup>
import { onMounted, ref, watch } from 'vue';
import AppButton from '../UI/AppButton.vue';
import SearchOptions from './SearchOptions.vue';
import usePostsStore from '../stores/posts';

const postsStore = usePostsStore()

const sortOptions = [
  {value: '---', text: 'Умолчанию'},
  {value: 'title', text: 'Названию'},
  {value: 'body', text: 'Содержанию'},
  {value: 'userId', text: 'Автору'},
]

const openPostNew = () => document.querySelector('#newPost').showModal()
const isThemeDark = ref(false)

onMounted(() => {
  isThemeDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
})

watch(isThemeDark, () => {
  isThemeDark.value ?
  document.querySelector('html').setAttribute('data-theme', 'dark') :
  document.querySelector('html').removeAttribute('data-theme')
})
</script>

<template>
  <header class="header">
    <AppButton
      id="mobileMenuButton" 
      label="Меню"
      popovertarget="mobileMenu"
    />
    <form class="search">
      <SearchOptions />
    </form>
    <div>
      <input 
        type="checkbox"
        id="darkTheme"
        v-model="isThemeDark"
      />
      <label for="darkTheme">
        Тёмная тема
      </label>
      <AppButton 
        label="Добавить"
        variant="secondary"
        @click="openPostNew"
      />
    </div>
  </header>
  <aside id="mobileMenu" popover>
    <SearchOptions />
  </aside>
</template>

<style>
#mobileMenuButton {
  display: block;
}

#mobileMenu {
  width: 100%;
  max-width: none;
  border: none;
  top: var(--header-height);
  font-size: 2rem;

  & .search {
    display: flex;
    flex-direction: column;
  }
}

.header {
  background-color: var(--header-bg-color);
  color: var(--text-color);
  padding: 6px 12px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  box-shadow: 0 4px 8px black;
  height: var(--header-height);
}

@media (width > 640px) {
  #mobileMenuButton, #mobileMenu {
    display: none;
  }
}
</style>