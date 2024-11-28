import React from 'react'
import { URIIMG } from '../../config'
import { verificarVideo } from '../../helpers/isVideo'
import { Link } from 'react-router-dom'


function CardCasosSiguiendo({ dataHelpSiguiendo }) {

    return (
        <>
            {
                dataHelpSiguiendo ?
                    dataHelpSiguiendo.map((d) => (
                        <div className='contenedorHelpsSeguido' key={d._id}>
                            <div className='contenedorImgVidHelpsSiguiendo'>
                                {!verificarVideo(d.image) ? <img className='imgvid' src={`${URIIMG}/${d.image.replace(/\\/g, '/')}`} alt="" /> : <video className='imgvid' src={`${URIIMG}/${d.image}`} controls />}
                            </div>
                            <p>{d.Titulo}</p>
                            <button className='btn dejardeseguir'>Dejar de seguir</button>
                            <Link to={`../caso/${d._id}`} className='btn vercaso'>Ver Caso</Link>
                        </div>
                    )) : <div>Sigue y ayuda</div>
            }
        </>
    )
}

export default CardCasosSiguiendo