import { usePostUser } from '../../hooks/usePostUser'
import PostOne from '../ComponentsPrincipal/componentePostAlls/PostOne'

function PostOfUser({ id }) {

    const { postUserPerfil } = usePostUser(id)

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "30px" }} >
            {postUserPerfil ?
                <PostOne data={postUserPerfil} needImage={true} /> :
                <p>No hay posts</p>
            }
        </div>
    )
}

export default PostOfUser