import { canUserDeletePost } from '../../../helpers/canDeletePost';
import { MdDelete } from "react-icons/md";
import CommentsPost from './CommentsPost';
import FormComentPost from './FormComentPost';
import { deletePost } from '../../../services/posts';
import { useToggleButton } from '../../../hooks/useToggleButton';
import { Link } from 'react-router-dom';
import { URIIMG } from '../../../config';
import ImagePerfil from './ImagePerfil';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { verificarVideo } from '../../../helpers/isVideo';

function PostOne({ data, needImage = true }) {
    const { despliegueComentario, toggleComentario } = useToggleButton();

    return (
        <>
            {data
                .slice()
                .reverse()
                .map((d) => (
                    <LazyLoadComponent key={d._id}>
                        <div className='contenedorPost' >

                            {canUserDeletePost(d.author._id ? d.author._id : d.author) && (
                                <MdDelete className='tarroDelete' onClick={() => deletePost(d._id)} />
                            )}
                            <div style={{ display: "flex", gap: "10px" }}>
                                {needImage && <ImagePerfil dataUser={d.author ? d.author : d} width2={"40px"} height2={"40px"} />}
                                <p className='autorPost'>{d.author ? d.author.name : d.Comment}</p>
                            </div>
                            <p className='contenidoPost'>{d.content ? d.content : d.Titulo}</p>

                            <Link to={"../caso/" + d._id}>
                                {d.image && !verificarVideo(d.image) ? <img src={`http://localhost:4000${d.image.replace(/\\/g, '/')}`} alt="" />
                                    :
                                    d.image && <video autoPlay controls src={`http://localhost:4000${d.image.replace(/\\/g, '/')}`} alt="" />}
                                {d.video && <video autoPlay controls src={URIIMG + "/" + d.video} alt="" />}
                            </Link>

                            <div className='contenedorCaracteristicasPost'>
                                <p>Me gusta</p>
                                <p>Seguir caso</p>
                                <Link to={"../caso/" + d._id}>Más info</Link>
                                {d.comments && <p className='despliegueComentarios' onClick={() => toggleComentario(d._id)}>Comentarios ({d.comments.length})</p>}
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
                    </LazyLoadComponent>
                ))}
        </>
    );
}

export default PostOne;
