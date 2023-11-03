<template>
    <div v-if="error">{{ error }}</div>

    <div v-if="singlePost">
      <h3>{{singlePost.title}}</h3>
      <p>{{singlePost.body}}</p>
    </div>
    <div v-else>Loading...</div>
</template>

<script>
import getSinglePostFromServer from '../../composables/getSinglePostFromServer'
export default {
    props:['id'],
    setup(props) {
        const { singlePost, error, loadData } = getSinglePostFromServer(props.id)

        loadData()

        return { singlePost, error }
    }

}
</script>

<style>

</style>