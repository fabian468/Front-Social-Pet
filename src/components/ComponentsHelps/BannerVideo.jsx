import React, { useState } from 'react'
import { useHaveHelps } from '../../hooks/useHaveHelp'
import { URIIMG } from '../../config'

function BannerVideo() {
    const { data, loading, error } = useHaveHelps()

    const [reproduccionManual, setReproduccionManual] = useState()


    if (loading) return <div className='contenedorPosts'>Loading...</div>
    if (error) return <div>Error: {error.message}</div>


    return (
        <div className='ContenedorSliderHorizontal'>
            <div className='Slider'>
                {
                    data ?
                        data
                            .slice()
                            .reverse()
                            .map((datosHelps) =>
                                <div key={datosHelps._id} className='Slide'>

                                    <video
                                        loop
                                        muted
                                        src={URIIMG + "/" + datosHelps.video}
                                        width={300}
                                        height={300}
                                        onClick={(e) => {
                                            const video = e.target;
                                            if (reproduccionManual !== datosHelps._id) {
                                                setReproduccionManual(datosHelps._id)
                                                video.muted = false;
                                                video.play();
                                            } else {
                                                video.pause();
                                                setReproduccionManual()
                                            }
                                        }}
                                        onMouseEnter={(e) => { e.target.play() }}
                                        onMouseLeave={(e) => { if (reproduccionManual !== datosHelps._id) e.target.pause() }}
                                        style={{ cursor: 'pointer' }}
                                    />

                                    <button>Seguir caso</button>

                                </div>
                            )
                        :
                        <p>No existen videos de ayuda</p>
                }
            </div>
        </div>
    )
}

export default BannerVideo