import { canUserDeletePost } from '../../../helpers/canDeletePost';
import { MdDelete } from "react-icons/md";
import CommentsPost from './CommentsPost';
import FormComentPost from './FormComentPost';
import { deletePost } from '../../../services/posts';
import { useToggleButton } from '../../../hooks/useToggleButton';
import { Link } from 'react-router-dom';
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

                    <LazyLoadComponent key={d._id} >


                        <div className='contenedorPost' style={{ backgroundColor: d.tipoAyudaNecesitada ? "darkgreen" : "white", color: d.tipoAyudaNecesitada && "white" }}>
                            {canUserDeletePost(d.author._id ? d.author._id : d.author) && (
                                <MdDelete className='tarroDelete' onClick={() => deletePost(d._id, d.tipoAyudaNecesitada)} />
                            )}
                            <div style={{ display: "flex", gap: "10px" }}>
                                {needImage && <ImagePerfil dataUser={d.author ? d.author : d} width2={"40px"} height2={"40px"} />}
                                <p className='autorPost'>{d.author ? d.author.name : d.Comment}</p>
                            </div>
                            <p className='contenidoPost'>{d.content ? d.content : d.Titulo}</p>



                            {d.tipoAyudaNecesitada ?
                                <Link to={"../caso/" + d._id}>
                                    {d.image && !verificarVideo(d.image) ? <img style={{ aspectRatio: "16/9" }} src={`http://localhost:4000/${d.image.replace(/\\/g, '/')}`} alt="" />
                                        :
                                        d.image && <video autoPlay controls style={{ aspectRatio: "16/9" }} src={`http://localhost:4000/${d.image.replace(/\\/g, '/')}`} alt="" />}
                                </Link> :
                                <>
                                    {d.image && !verificarVideo(d.image) ? <img style={{ aspectRatio: "16/9" }} src={`http://localhost:4000${d.image.replace(/\\/g, '/')}`} alt="" />
                                        :
                                        d.image && <video style={{ aspectRatio: "16/9" }} autoPlay controls src={`http://localhost:4000${d.image.replace(/\\/g, '/')}`} alt="" />}

                                </>
                            }

                            <div className='contenedorCaracteristicasPost'>
                                <p>Me gusta</p>
                                {d.tipoAyudaNecesitada && <p>Seguir caso</p>}

                                {d.tipoAyudaNecesitada && <Link to={"../caso/" + d._id}>Más info</Link>}
                                {d.comments && <p className='despliegueComentarios' onClick={() => toggleComentario(d._id)}>Comentarios ({d.comments.length})</p>}
                            </div>
                            {despliegueComentario === d._id && (
                                <>
                                    <div className='contenedorTotalComentarios'>
                                        <CommentsPost comments={d.comments} idPost={d._id} ishelps={d.tipoAyudaNecesitada} />
                                    </div>
                                    <FormComentPost d={d} />
                                </>
                            )}
                            <hr />
                        </div>
                    </LazyLoadComponent >

                ))
            }
        </>
    );
}

export default PostOne;
