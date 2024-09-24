import { useEffect, useState } from "react"
import { getUserbyname } from "../services/friends"

export function useUserPersonal(letter) {
    const [userPerfil, setUserPerfil] = useState([])

    useEffect(() => {
        const getDataPost = async (l) => {
            const datos = await getUserbyname(l)
            setUserPerfil(datos)
        }

        if (letter !== "") { getDataPost(letter) } else {
            setUserPerfil("")
        }

    }, [setUserPerfil, letter])


    return {
        userPerfil
    }
}