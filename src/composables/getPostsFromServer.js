import { ref } from 'vue'

const getPostsFromServer = () => {
    const posts = ref([])
    const error = ref(null)

    const loadData = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts')

            if (!data.ok) {
                throw Error('no data available')
            }

            posts.value = await data.json()
        }

        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {posts, error, loadData}
}

export default getPostsFromServer