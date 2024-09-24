import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarConDatos({ dataUser }) {
    return (
        <div >
            <p className='contenedorBienvenido'> Bienvenido: {dataUser.name}</p >

            <ul className='ContenedorNavbarPrincipal'>
                <li><NavLink
                    to="post"
                    className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                >
                    Home
                </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"perfil"}
                        className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                    >
                        Perfil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"friens"}
                        className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                    >
                        Amigos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"help"}
                        className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                    >
                        Ayudas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"shop"}
                        className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                    >
                        Tienda
                    </NavLink>
                </li>
            </ul>
        </div >
    )
}

export default NavbarConDatos