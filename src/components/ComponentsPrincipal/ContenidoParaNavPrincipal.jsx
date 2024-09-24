import React from 'react'
import SearchUser from './SearchUser';
import LogOut from './LogOut';


function ContenidoParaNavPrincipal() {
    return (
        <div className='ContenedorContenidoNavPrincipal'>
            <SearchUser />
            <LogOut />
        </div>
    )
}

export default ContenidoParaNavPrincipal