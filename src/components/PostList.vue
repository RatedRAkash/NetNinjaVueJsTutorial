<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"></SinglePost>
        </div>
    </div>
  
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
    props: ["posts"],
    setup(props) {
        console.log(props.posts);
    },
    components: { SinglePost }
}
</script>

<style>

</style>