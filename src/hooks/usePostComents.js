import { useState } from "react";
import { commentsPost } from "../services/posts";

export function useComments() {

    const [comentario, setComentario] = useState("")

    function agregarComentrario(e, idComentario) {
        e.preventDefault()

        if (comentario !== "") {
            const id = localStorage.getItem('idUser');
            commentsPost(idComentario, id, comentario)
            if (commentsPost) {
                setComentario("")
            }
        }

        return {
            comentario,
            setComentario
        }
    }
}