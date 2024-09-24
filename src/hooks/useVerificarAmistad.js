import { useEffect, useState } from "react";
import { verificarAmistad } from "../services/friends";

export function useVerificarUsuariosAmistad(idUusuarioActual, IdUsuarioDeseado) {

    const [estadoUsuario, setEstadoUsuario] = useState([])

    useEffect(() => {
        if (idUusuarioActual && IdUsuarioDeseado) {
            const verificaFriendship = async (idUusuarioActual, IdUsuarioDeseado) => {
                const data = await verificarAmistad(idUusuarioActual, IdUsuarioDeseado)
                setEstadoUsuario(data.message)
            }
            verificaFriendship(idUusuarioActual, IdUsuarioDeseado)

        }

    }, [idUusuarioActual, IdUsuarioDeseado])


    return {
        estadoUsuario
    }
}

