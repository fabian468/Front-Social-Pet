import React from 'react'

import { acceptFriensRequest, deleteFriends, rejectFriensRequest, sendFriensRequest } from '../../services/friends';

function RenderButtonFriends({ estadoUsuario, dataUser, id }) {

    const handlerClickRequestFriends = async (e) => {
        e.preventDefault()
        await sendFriensRequest(dataUser._id, id)

    }

    const handlerClickAcceptRequestFriends = async (e) => {
        e.preventDefault()
        await acceptFriensRequest(dataUser._id, id)

    }

    const handlerClickRejectRequestFriends = async (e) => {
        e.preventDefault()
        const res = await rejectFriensRequest(dataUser._id, id)
        console.log(res)
    }

    const handlerClickDeleteRequestFriends = async (e) => {
        e.preventDefault()
        await deleteFriends(dataUser._id, id)
    }

    switch (estadoUsuario) {
        case "No hay solicitud de amistad ni son amigos":
            return <button onClick={e => handlerClickRequestFriends(e)}>Agregar Usuario</button>;

        case "Solicitud ya enviada":
            return <p>Solicitud enviada</p>;

        case "Tienes una solicitud pendiente de este usuario":
            return (
                <>
                    <button onClick={e => handlerClickAcceptRequestFriends(e)}>Aceptar solicitud</button>
                    <button onClick={e => handlerClickRejectRequestFriends(e)}>Rechazar solicitud</button>
                </>
            );

        case "Ya son amigos":
            return <><p>Amigos</p> <button onClick={e => handlerClickDeleteRequestFriends(e)} >Eliminar amistad</button></>;

        case "Usuario en lista negra":
            return <p>Usuario bloqueado</p>;

        default:
            return null;
    }
}

export default RenderButtonFriends