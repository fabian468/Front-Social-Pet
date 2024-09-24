import { useEffect, useState } from 'react'
import { ViewAllPosts } from '../services/posts'

export function usePostAll() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await ViewAllPosts()
                setData(posts)


            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }


        fetchPosts()
    }, [data])

    return {
        data, loading, error
    }

}