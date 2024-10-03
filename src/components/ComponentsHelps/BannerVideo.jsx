import React, { useState } from 'react'
import { useHaveHelps } from '../../hooks/useHaveHelp'
import { URIIMG } from '../../config'

function BannerVideo() {
    const { data, loading, error } = useHaveHelps()

    const [reproduccionManual, setReproduccionManual] = useState()


    if (loading) return <div className='contenedorPosts'>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    const playVideoClick = (e, id) => {
        const video = e.target;
        if (reproduccionManual !== id) {
            setReproduccionManual(id)
            video.muted = false;
            video.play();
        } else {
            video.pause();
            setReproduccionManual()
        }

    }

    const playVideoOnmouse = (e) => {
        const video = e.target;
        video.play()
        video.muted = true;
    }

    const pauseVideoLeaveMouse = (e, id) => {
        if (reproduccionManual !== id) e.target.pause()

    }

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
                                    <p className='TituloVideoHelp animacionopacity'>{datosHelps.Titulo} </p>
                                    <video
                                        loop
                                        muted
                                        src={URIIMG + "/" + datosHelps.video}
                                        width={300}
                                        height={300}
                                        onClick={(e) => {
                                            playVideoClick(e, datosHelps._id)
                                        }}
                                        onMouseEnter={(e) => {
                                            playVideoOnmouse(e)
                                        }}
                                        onMouseLeave={(e) => {
                                            pauseVideoLeaveMouse(e, datosHelps._id)
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    />

                                    <button className='animacionopacity'>Seguir caso</button>

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