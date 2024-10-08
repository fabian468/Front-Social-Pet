import React from 'react'
import InputPost from './InputPost'
import { usePostAll } from '../../hooks/usePostAll';
import PostOne from './componentePostAlls/PostOne';
import Help from '../../page/Help';


function LoadingPost() {

    const { data, loading, error, setData } = usePostAll()

    if (loading) return <div className='contenedorPosts'>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className='contenedorPosts' >
            <div className='ContenedorInputPost'>
                <InputPost setData={setData} datos={data} />
            </div>
            <hr />
            <Help />
            {!data ? (
                <div>No posts available</div>
            ) : (
                <PostOne data={data} />
            )}
        </div>
    )
}

export default LoadingPost
