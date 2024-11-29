import { useEffect, useState } from 'react'
import { ViewAllPosts } from '../services/posts'
import { getAllHelps } from '../services/helps'

export function usePostAll() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchPosts = async () => {
            try {

                const [posts, helpPost] = await Promise.all([ViewAllPosts(), getAllHelps()])


                const combinedData = [...posts, ...helpPost].sort((a, b) => {
                    return new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
                })
                setData(combinedData)

            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return {
        data,
        loading,
        error,
        setData,
    }
}
