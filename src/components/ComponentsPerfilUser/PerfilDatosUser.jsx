import React, { useContext } from 'react';
import { stateCompo } from '../../context/stateCompo';
import PostOfUser from './PostOfUser';
import avatar from "../../img/avatar.jpg";
import { useParams } from 'react-router-dom';
import { useVerificarUsuariosAmistad } from '../../hooks/useVerificarAmistad';
import RenderButtonFriends from './RenderButtonFriends';

function PerfilDatosUser() {
    const { dataUser } = useContext(stateCompo);
    const { user, id } = useParams();
    const { estadoUsuario } = useVerificarUsuariosAmistad(dataUser._id, id);



    return (
        <div>
            {!id ? (
                <div>
                    <img className="imgAvatar" src={dataUser.image ? `http://localhost:4000${dataUser.image.replace(/\\/g, '/')}` : avatar} alt="avatar socialPet" />
                    <h2>{dataUser.name}</h2>
                    <hr />
                    <PostOfUser id={dataUser._id} />
                </div>
            ) : (
                <div>
                    <img className="imgAvatar" src={dataUser.image ? dataUser.image : avatar} alt="avatar socialPet" />
                    <h2>{user}</h2>
                    <RenderButtonFriends estadoUsuario={estadoUsuario} dataUser={dataUser} id={id} />
                    <hr />
                    <PostOfUser id={id} />
                </div>
            )}
        </div>
    );
}

export default PerfilDatosUser;
