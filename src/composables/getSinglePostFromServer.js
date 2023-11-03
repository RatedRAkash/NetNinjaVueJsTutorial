import { ref } from 'vue'

const getSinglePostFromServer = (id) => {
    const singlePost = ref(null)
    const error = ref(null)

    const loadData = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts/' + id)

            if (!data.ok) {
                throw Error('that post does not Exist')
            }

            singlePost.value = await data.json()
        }

        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {singlePost, error, loadData}
}

export default getSinglePostFromServer