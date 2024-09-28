import React from 'react'
import { useHaveHelps } from '../../hooks/useHaveHelp'
import { URIIMG } from '../../config'

function BannerVideo() {
    const { data, loading, error } = useHaveHelps()


    if (loading) return <div className='contenedorPosts'>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    console.log(data)

    return (
        <div>
            {
                data ?
                    data
                        .slice()
                        .reverse()
                        .map((datosHelps) =>
                            <div key={datosHelps._id}>

                                <video loop autoPlay src={URIIMG + "/" + datosHelps.video} width={300} height={300} controls />
                            </div>
                        )
                    :
                    <p>No existen videos de ayuda</p>
            }

        </div>
    )
}

export default BannerVideo