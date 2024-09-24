import React from 'react'
import Nav from '../components/ComponentsPrincipal/Nav'
import LoadingPost from '../components/ComponentsPrincipal/LoadingPost'
import NavbarPrincipal from '../components/ComponentsPrincipal/NavbarPrincipal'
import Anuncios from '../components/ComponentsPrincipal/Anuncios'
import "../styles/principal.css"
import { Route, Routes } from 'react-router-dom'
import PerfilUser from './PerfilUser'
import StateUserGlobal from '../context/StateUserGlobal'
import ContenidoParaNavPrincipal from '../components/ComponentsPrincipal/ContenidoParaNavPrincipal'
import Friends from './Friends'

function Principal() {

    return (
        <StateUserGlobal >
            <div>
                <Nav contenido={<ContenidoParaNavPrincipal />} />
                <div className='contenedorformPrincipal'>
                    <div className='ContenedorPrincipalPost'>
                        <NavbarPrincipal />
                        <Routes>
                            <Route path='post' element={<LoadingPost />} />
                            <Route path='perfil' element={<PerfilUser />} />
                            <Route path='perfil/:user/:id' element={<PerfilUser />} />
                            <Route path='friends' element={<Friends />} />

                        </Routes>
                        <Anuncios />
                    </div>
                </div>
            </div>
        </StateUserGlobal>
    )
}

export default Principal