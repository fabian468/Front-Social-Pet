import { usePostUser } from '../../hooks/usePostUser'

function PostOfUser({ id }) {

    const { postUserPerfil } = usePostUser(id)


    return (
        <div>
            {postUserPerfil ?
                postUserPerfil
                    .slice()
                    .reverse()
                    .map((data) => {
                        return (
                            <div key={data._id}>
                                <p>{data.content} </p>
                                <img className='imgPostsPerfilUser' src={`http://localhost:4000${data.image.replace(/\\/g, '/')}`} alt="" />
                            </div>
                        )
                    }) :
                <p>No hay posts</p>

            }
        </div>
    )
}

export default PostOfUser