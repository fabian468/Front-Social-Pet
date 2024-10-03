import React from 'react'
import { NavLink } from 'react-router-dom'
import imgHome from "../../../img/casa-de-perro.png"
import perroPng from "../../../img/perro.png"

function NavbarConDatos({ dataUser }) {
    return (
        <div >
            <p className='contenedorBienvenido'> Bienvenido: {dataUser.name}</p >

            <ul className='ContenedorNavbarPrincipal'>
                <li><NavLink
                    to="post"
                    className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                >
                    <img src={imgHome} alt="Home" style={{ width: '20px', marginRight: '8px' }} />
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
                        to={"friends"}
                        className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                    >
                        <img src={perroPng} alt="Home" style={{ width: '20px', marginRight: '8px' }} />
                        Amigos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"help"}
                        className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                    >
                        Siguiendo
                    </NavLink>
                </li>
                {  /*
                <li>
                    <NavLink
                        to={"shop"}
                        className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                    >
                        Tienda
                    </NavLink>
                </li>
                */}
            </ul>
        </div >
    )
}

export default NavbarConDatos