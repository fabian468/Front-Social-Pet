import { canUserDeletePost } from '../../../helpers/canDeletePost';
import { MdDelete } from "react-icons/md";
import CommentsPost from './CommentsPost';
import FormComentPost from './FormComentPost';
import { deletePost } from '../../../services/posts';
import { useToggleButton } from '../../../hooks/useToggleButton';

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

                        <img src={`http://localhost:4000${d.image.replace(/\\/g, '/')}`} alt="" />

                        <p className='despliegueComentarios' onClick={() => toggleComentario(d._id)}>Comentarios ({d.comments.length})</p>

                        {despliegueComentario === d._id && (
                            <>
                                <div className='contenedorTotalComentarios'>
                                    <CommentsPost comments={d.comments} />
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
