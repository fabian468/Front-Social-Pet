import React, { useEffect, useState } from 'react'
import { ViewAllPosts } from '../../services/posts'
import InputPost from './InputPost'

function LoadingPost() {
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
    }, [setLoading])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className='contenedorPosts' >
            <div className='ContenedorInputPost'>
                <InputPost />
            </div>
            <hr />
            {data.length === 0 ? (
                <div>No posts available</div>
            ) : (
                data.map((d) => (
                    <div key={d._id}>
                        <p >{d.author ? d.author.name : d.content}</p>
                        <p>{d.content}</p>
                        <img src={`http://localhost:4000${d.image.replace(/\\/g, '/')}`} alt="" />
                        <hr />
                    </div>

                ))
            )}
        </div>
    )
}

export default LoadingPost
