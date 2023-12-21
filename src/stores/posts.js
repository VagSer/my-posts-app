import { defineStore } from "pinia";
import { computed, ref } from "vue";

const usePostsStore = defineStore('postsStore', () => {
  const posts = ref([])
  const searchValue = ref('')
  const sortBy = ref('---')
  const isLoading = ref(false)
  const editablePost = ref(null)

  const sortedPosts = computed(() => {
    let newArray = [...posts.value]
    if (sortBy.value === '---') {
      return newArray
    }
    if (sortBy.value === 'userId') {
      newArray.sort((postOne, postTwo) => {
        return postOne.userId > postTwo.userId
      })
    } else {
      newArray.sort((postOne, postTwo) => {
        return postOne[sortBy.value]?.localeCompare(postTwo[sortBy.value])
      })
    }
    return newArray
  })

  const searchSortedPosts = computed(() => {
    let newPosts = [];
    sortedPosts.value.forEach(post => {
      if (post.title.toLowerCase().includes(searchValue.value.toLowerCase())
      || post.body.toLowerCase().includes(searchValue.value.toLowerCase()) ) {
        newPosts.unshift(post)
      }
    })
    return newPosts;
  })

  const fetchPosts = () => {
    isLoading.value = true
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        posts.value = data
        isLoading.value = false
      });
  }

  const addPost = (newPost) => {
    posts.value.push(newPost)
  }

  const updatePost = (newPost) => {
    const changeIndex = posts.value.findIndex(
      post => post.id === newPost.id
    )
    posts.value[changeIndex] = {...newPost}
  }

  const deletePost = (deleteId) => {
    posts.value = posts.value.filter(post => post.id !== deleteId)
  }

  const deleteAllPosts = () => posts.value.length = 0

  return {
    posts, searchValue, isLoading, searchSortedPosts, sortBy,
    fetchPosts, editablePost, addPost, updatePost, deletePost,
  }
})

export default usePostsStore;