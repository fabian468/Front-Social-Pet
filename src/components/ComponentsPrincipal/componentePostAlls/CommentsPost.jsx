import React from 'react'

function CommentsPost({ comments }) {
    return (
        <div>
            {
                comments ? comments.map(com => {

                    return <div key={com._id} className='contenedorComments'>
                        <div>
                            <p className='NameUserComments'>{com.user.name} </p>
                            <p className='comentario' >{com.comment} </p>
                        </div>
                    </div>
                }) : <></>
            }
        </div>
    )
}

export default CommentsPost