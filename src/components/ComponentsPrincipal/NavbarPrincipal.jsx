import React, { useContext } from 'react'



import { stateCompo } from '../../context/stateCompo'
import NavbarConDatos from './componenteNavbar/NavbarConDatos'
import NavbarSinDatos from './componenteNavbar/NavbarSinDatos'

function NavbarPrincipal() {

    const { dataUser } = useContext(stateCompo)

    return (
        <div className='contenedorNavbarPrincipal'>     {
            dataUser ?
                <NavbarConDatos dataUser={dataUser} /> : <NavbarSinDatos />

        }
        </div>
    )
}

export default NavbarPrincipal