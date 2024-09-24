import React from 'react'
import { Link } from 'react-router-dom'

function ListSearchUser({ userPerfil, setUserSearch }) {
    return (
        <div className='contenedorListaBusquedaUsuario'>
            {
                userPerfil && userPerfil.map(e =>
                    <ul key={e._id}>
                        <li onClick={() => setUserSearch("")}>
                            <Link to={"perfil/" + e.name + "/" + e._id}>
                                {e.name}
                            </Link>
                        </li>
                    </ul>
                )
            }
        </div>
    )
}

export default ListSearchUser