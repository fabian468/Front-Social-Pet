import React, { useContext } from 'react';
import { stateCompo } from '../../context/stateCompo';
import PostOfUser from './PostOfUser';
import PerfilUserFriends from './PerfilUserFriends';
import { useParams } from 'react-router-dom';
import ImagePerfil from '../ComponentsPrincipal/componentePostAlls/ImagePerfil';

function PerfilDatosUser() {
    const { dataUser } = useContext(stateCompo);

    const { id } = useParams();

    return (
        <div>
            {!id ? (
                <div>
                    <ImagePerfil dataUser={dataUser} width2={"200px"} height2={"200px"} />
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
