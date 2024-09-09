import React from 'react'
import Nav from '../components/ComponentsPrincipal/Nav'
import LoadingPost from '../components/ComponentsPrincipal/LoadingPost'
import NavbarPrincipal from '../components/ComponentsPrincipal/NavbarPrincipal'
import Anuncios from '../components/ComponentsPrincipal/Anuncios'
import LogOut from '../components/ComponentsPrincipal/LogOut';
import "../styles/principal.css"

function Principal() {

    return (
        <div>
            <Nav contenido={<LogOut />} />
            <div className='contenedorformPrincipal'>
                <div className='ContenedorPrincipalPost'>
                    <NavbarPrincipal />
                    <LoadingPost />
                    <Anuncios />
                </div>
            </div>
        </div>
    )
}

export default Principal