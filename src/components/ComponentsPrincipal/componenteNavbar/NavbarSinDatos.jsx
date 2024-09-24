import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarSinDatos() {
    return (
        <div >
            <p> Bienvenido: </p >

            <ul>
                <li><NavLink
                    to="post"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Home
                </NavLink>
                </li>
                <li>
                    <NavLink
                        to="perfil"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Perfil
                    </NavLink>
                </li>
            </ul>
        </div >
    )
}

export default NavbarSinDatos