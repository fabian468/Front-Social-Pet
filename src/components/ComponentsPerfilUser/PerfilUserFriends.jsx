import React from 'react'
import PostOfUser from './PostOfUser'
import RenderButtonFriends from './RenderButtonFriends'
import avatar from "../../img/avatar.jpg";
import { useVerificarUsuariosAmistad } from '../../hooks/useVerificarAmistad';
import { useHaveOneFriends } from '../../hooks/useHaveFriends';

function PerfilUserFriends({ dataUser, id }) {
    const { estadoUsuario } = useVerificarUsuariosAmistad(dataUser._id, id);

    const { data, loading, error } = useHaveOneFriends(id)


    if (loading) return <div className='contenedorPosts'>Loading...</div>
    if (error) return <div>Error: {error.message}</div>


    return (
        <div>
            <img className="imgAvatar" src={data.image ? `http://localhost:4000${data.image.replace(/\\/g, '/')}` : avatar} alt="avatar socialPet" />
            <h2>{data.name}</h2>
            <RenderButtonFriends estadoUsuario={estadoUsuario} dataUser={dataUser} id={id} />
            <hr />
            <PostOfUser id={id} />
        </div>
    )
}

export default PerfilUserFriends