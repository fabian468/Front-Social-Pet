import { useEffect, useState } from 'react'
import { getAllFriends } from '../services/friends'
import { getUser } from '../services/getUsers'

export function useHaveFriends(id) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async (id) => {
            try {
                const friends = await getAllFriends(id)
                setData(friends)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }


        fetchPosts(id)
    }, [id])

    return {
        data, loading, error
    }

}

export function useHaveOneFriends(id) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async (id) => {
            try {
                const friends = await getUser(id)
                setData(friends)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }


        fetchPosts(id)
    }, [id])

    return {
        data, loading, error
    }

}