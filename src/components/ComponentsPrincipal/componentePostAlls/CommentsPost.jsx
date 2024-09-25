import React from 'react'
import { canUserDeletePost } from '../../../helpers/canDeletePost'
import { MdDelete } from 'react-icons/md'
import { deleteComments } from '../../../services/posts'

function CommentsPost({ comments, idPost }) {


    return (
        <div>
            {
                comments ? comments.map(com => {

                    return <div key={com._id} className='contenedorComments'>
                        <div>
                            <p className='NameUserComments'>{com.user.name} </p>
                            <p className='comentario' >{com.comment} </p>
                            {canUserDeletePost(com.user._id) && (
                                <MdDelete className='tarroDelete' onClick={() => deleteComments(idPost, com._id)} />
                            )}
                        </div>
                    </div>
                }) : <></>
            }
        </div>
    )
}

export default CommentsPost