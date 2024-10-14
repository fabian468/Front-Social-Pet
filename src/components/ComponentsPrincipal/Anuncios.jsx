import React from 'react'
import anuncio from '../../img/anuncio.mp4'


function Anuncios() {
    return (
        <article className='contenedorAnuncios'>
            <a target='_blanck' href="https://purina.cl/catchow/productos-catchow?gad_source=1&gclid=Cj0KCQjwsJO4BhDoARIsADDv4vBkdxVYQT9mvmMp1GYvnu66KbmLeblY5BUABT9BTpNENUKh7Fwy82IaAkQIEALw_wcB&gclsrc=aw.ds"> <video autoPlay loop src={anuncio} width={300} style={{ height: "100%", objectFit: "cover" }} muted ></video></a>
        </article>
    )
}

export default Anuncios