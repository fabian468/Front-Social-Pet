import React from 'react'
import InputPost from './InputPost'
import { usePostAll } from '../../hooks/usePostAll';
import PostOne from './componentePostAlls/PostOne';
import { LazyLoadComponent } from 'react-lazy-load-image-component';


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
            {/*    <Help />*/}
            {!data ? (
                <div>No existen post</div>
            ) : (
                <LazyLoadComponent>
                    <PostOne data={data} />
                </LazyLoadComponent>
            )}
        </div>
    )
}

export default LoadingPost
