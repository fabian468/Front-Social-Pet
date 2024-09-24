import { useEffect, useState } from 'react'
import { getDataUserPerfil } from '../services/posts'

export function usePostUser(id) {
    const [postUserPerfil, setPostUserPerfil] = useState([])

    useEffect(() => {
        const getDataPost = async (id) => {
            const datos = await getDataUserPerfil(id)
            setPostUserPerfil(datos)

        }

        getDataPost(id)
    }, [id])


    return {
        postUserPerfil
    }
}