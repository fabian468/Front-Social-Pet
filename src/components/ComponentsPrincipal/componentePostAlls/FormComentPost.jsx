import React, { useState } from 'react'
import { commentsPost } from '../../../services/posts';

function FormComentPost({ d }) {

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

    }


    return (
        <>
            <form onSubmit={e => agregarComentrario(e, d._id)} className='FormCommenst'>
                <textarea placeholder="Comentar post" value={comentario} onChange={e => setComentario(e.target.value)} name="comments" id="comments"></textarea>
                <button>Comentar</button>
            </form>
        </>
    )
}

export default FormComentPost