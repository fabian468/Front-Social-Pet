import React, { useContext } from 'react';
import { stateCompo } from '../../context/stateCompo';
import PostOfUser from './PostOfUser';
import avatar from "../../img/avatar.jpg";
import PerfilUserFriends from './PerfilUserFriends';
import { useParams } from 'react-router-dom';
import { URIIMG } from '../../config';

function PerfilDatosUser() {
    const { dataUser } = useContext(stateCompo);

    const { id } = useParams();

    return (
        <div>
            {!id ? (
                <div>
                    <img className="imgAvatar" src={dataUser.image ? URIIMG + dataUser.image.replace(/\\/g, '/') : avatar} alt="avatar socialPet" />
                    <h2>{dataUser.name}</h2>
                    <hr />
                    <PostOfUser id={dataUser._id} />

                </div>
            ) : (
                <PerfilUserFriends id={id} dataUser={dataUser} />
            )}
        </div>
    );
}

export default PerfilDatosUser;
