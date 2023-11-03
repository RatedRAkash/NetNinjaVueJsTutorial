<template>
  <div class="post">
    <h1>All Posts page</h1>
    <div v-if="error">{{ error }}</div>

    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading...</div>

  </div>
</template>

<script>
import PostList from '../../components/PostList.vue'

import getPostsFromServer from '../../composables/getPostsFromServer.js'

import { ref } from 'vue'
export default {
  name: 'PostView',
  components: { PostList },
  setup(props) {
    console.log(this)

    // const posts = ref([
    //     { title: "Welcome to Blog 1", id: 1, body: "the post is very good"
    //     },
    //     { title: "Blog 2", id: 2, body: "Blog 2 is NOT that very good"
    //     },
    //     { title: "Bonjour Blog 3", id: 3, body: "This is French Blog"
    //     }
    // ])

    // const posts = ref([])
    // const error = ref(null)

    // const loadData = async () => {
    //   try{
    //       let data = await fetch('http://localhost:3000/posts')

    //       if(!data.ok){
    //         throw Error('no data available')
    //       }

    //       posts.value = await data.json()
    //   }

    //   catch(err){
    //     error.value = err.message
    //     console.log(error.value)
    //   }
    // }

    // loadData()

    const { posts, error, loadData } = getPostsFromServer()

    loadData()

    return { posts, error }
  }
}
</script>

<style>

</style>
