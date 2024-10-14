import React from 'react'
import { NavLink } from 'react-router-dom'
import imgHome from "../../../img/casa-de-perro.png"
import perroPng from "../../../img/perro.png"
import ganado from "../../../img/ganado.png"
import carinoso from "../../../img/carinoso.png"
import ImagePerfil from '../componentePostAlls/ImagePerfil'



function NavbarConDatos({ dataUser }) {

    return (
        <nav >
            <div style={{
                display: "flex",
                marginTop: "30px",
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center",
                width: "50%"

            }}>
                <ImagePerfil dataUser={dataUser} width2={"60px"} height2={"60px"} />
                <p className='contenedorBienvenido'> {dataUser.name}</p>
            </div>

            <ul className='ContenedorNavbarPrincipal'>
                <li>
                    <NavLink
                        to="welcome"
                        className={({ isActive }) => (isActive ? 'active' : 'noactive')}
                    >
                        <img src={imgHome} alt="Home" style={{ width: '20px', marginRight: '8px' }} />
                        Bienvenido
                    </NavLink>
                </li>
                <li>
                    <NavLink
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
                        <img src={ganado} alt="Home" style={{ width: '20px', marginRight: '8px' }} />

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
                        <img src={carinoso} alt="Home" style={{ width: '20px', marginRight: '8px' }} />
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
        </nav >
    )
}

export default NavbarConDatos