import React, { useState } from 'react'
import { useUserPersonal } from '../../hooks/useUserPersonal'
import ListSearchUser from './componenteSearchUser/ListSearchUser'

function SearchUser() {
    const [useSearch, setUserSearch] = useState("")

    const { userPerfil } = useUserPersonal(useSearch)



    return (
        <div>
            <input placeholder='Busca en SocialPet' value={useSearch} className='InputSearchUser' type="search" onChange={e => setUserSearch(e.target.value)} />
            <ListSearchUser userPerfil={userPerfil} setUserSearch={setUserSearch} />
        </div>
    )
}

export default SearchUser