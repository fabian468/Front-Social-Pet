import { canUserDeletePost } from '../../../helpers/canDeletePost';
import { MdDelete } from "react-icons/md";
import CommentsPost from './CommentsPost';
import FormComentPost from './FormComentPost';
import { deletePost } from '../../../services/posts';
import { useToggleButton } from '../../../hooks/useToggleButton';
import { Link } from 'react-router-dom';

function PostOne({ data }) {
    const { despliegueComentario, toggleComentario } = useToggleButton();

    return (
        <>
            {data
                .slice()
                .reverse()
                .map((d) => (
                    <div key={d._id}>
                        {canUserDeletePost(d.author._id) && (
                            <MdDelete className='tarroDelete' onClick={() => deletePost(d._id)} />
                        )}
                        <div>
                            <p className='autorPost'>{d.author ? d.author.name : d.content}</p>
                        </div>
                        <p className='contenidoPost'>{d.content}</p>

                        <Link to={"../caso/" + d._id}>
                            <img src={`http://localhost:4000${d.image.replace(/\\/g, '/')}`} alt="" />
                        </Link>

                        <div className='contenedorCaracteristicasPost'>
                            <p>Me gusta</p>
                            <p>Seguir caso</p>
                            <Link to={"../caso/" + d._id}>Más info</Link>
                            <p className='despliegueComentarios' onClick={() => toggleComentario(d._id)}>Comentarios ({d.comments.length})</p>
                        </div>
                        {despliegueComentario === d._id && (
                            <>
                                <div className='contenedorTotalComentarios'>
                                    <CommentsPost comments={d.comments} idPost={d._id} />
                                </div>
                                <FormComentPost d={d} />
                            </>
                        )}
                        <hr />
                    </div>
                ))}
        </>
    );
}

export default PostOne;
