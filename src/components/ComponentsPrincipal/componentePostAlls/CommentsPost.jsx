import React from 'react'
import { canUserDeletePost } from '../../../helpers/canDeletePost'
import { MdDelete } from 'react-icons/md'
import { deleteComments } from '../../../services/posts'
import ImagePerfil from './ImagePerfil'

function CommentsPost({ comments, idPost, ishelps }) {
    return (
        <div className='contenedorDentroComentarios'>
            {
                comments ? comments.map(com => {

                    return <div key={com._id} style={{ display: "flex", alignItems: "center" }}>
                        <ImagePerfil dataUser={com.user} width2={"40px"} height2={"40px"} />
                        <div className='contenedorComments'>
                            <div>
                                <p className='NameUserComments'>{com.user.name} </p>
                                <p className='comentario' >{com.comment} </p>
                            </div>
                            {canUserDeletePost(com.user._id) && (
                                <MdDelete className='tarroDelete' onClick={() => deleteComments(idPost, com._id, ishelps)} />
                            )}
                        </div>
                    </div>
                }) : <></>
            }
        </div>
    )
}

export default CommentsPost