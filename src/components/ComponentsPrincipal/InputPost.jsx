import React, { useState } from 'react'
import { createHelp, createPost } from '../../services/posts'
import { useForm } from 'react-hook-form'
import { usePrevImage } from '../../hooks/usePrevImage';
import { verificarDuracionVideo, verificarVideo } from '../../helpers/isVideo';



function InputPost({ setData, datos }) {
    const [esVideo, setEsVideo] = useState(false);
    const [videoDuraMasDe2minutos, setvideoDuraMasDe2minutos] = useState(false);
    const { PrevImagen, handleImageChange } = usePrevImage();



    const { register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm()




    const onSubmit = handleSubmit(async (data) => {
        if (!data.esAyuda) {
            const nuevoPost = await createPost(data.content, data.image[0], localStorage.getItem('idUser'))
            setData([...datos, nuevoPost])
            reset()
            handleImageChange()
        } else {
            const nuevaHelp = await createHelp(
                data.content,
                data.image[0],
                localStorage.getItem('idUser'),
                data.nombreAnimal,
                data.direccionAnimal,
                data.tipoAyuda,
                null
            )
            setData([...datos, nuevaHelp.newHelp])

            reset()
            handleImageChange()
        }


    })



    return (
        <form onSubmit={onSubmit} className='formPost'>
            <textarea

                {...register("content",
                    {
                        validate: (value) => {
                            //if (watch("image").length === 0) return "Si no coloca imagen se requiere un contenido"
                        }
                    }
                )}
                placeholder='¿Tu mascota hizo algo divertido? ¡Compártelo!'
                type='text'
            />
            {
                errors.content && <span>{errors.content.message} </span>
            }

            <label >
                <input
                    style={{ margin: ".5em" }}
                    {...register("esAyuda")}
                    type="checkbox"
                    name="esAyuda"
                    id="esAyuda"
                />
                Es ayuda y/o en adopción
            </label>
            {
                watch("esAyuda") &&
                <div className='formAdicionalAyuda'>
                    <label>Nombre del animal:
                        <input {...register("nombreAnimal", {
                            required: true
                        })} type="text" />
                    </label>
                    <label>Direccion del animal:
                        <input {...register("direccionAnimal", {
                            required: true
                        })}
                            type="text" />
                    </label>
                    <label>Tipo de ayuda que necesita:
                        <select {...register("tipoAyuda")} name="" id="">
                            <option value="adopcion">Adopción</option>
                            <option value="alimento">Alimento</option>
                            <option value="dinero">Dinero</option>
                            <option value="medicamentos">Medicamentos</option>
                        </select>
                    </label>
                </div>
            }

            <label htmlFor="file" className="custum-file-upload">
                <div className="icon">
                    <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
                </div>
                <div className="text">
                    <span>Subir imágen</span>
                </div>
                <input
                    {...register("image",
                        {
                            required: false
                        })}
                    id="file"
                    type="file"
                    accept="image/*, video/*"
                    onChange={(e) => {
                        register('image').onChange(e);
                        setEsVideo(verificarVideo(e.target))
                        verificarVideo(e.target) && verificarDuracionVideo(e.target, setvideoDuraMasDe2minutos)
                        handleImageChange(e);

                    }}
                />
            </label>

            {esVideo && videoDuraMasDe2minutos ?
                <label><input type="checkbox" />¿ Desea colocarlo en el espacio short ? </label> :
                esVideo &&
                <p>Si desea colocar el video en short, la duración no debe sobrepasar los 2 minutos</p>}

            {PrevImagen && !esVideo ? <img src={PrevImagen} alt="Preview" style={{ width: '300px', marginTop: '20px' }} /> :
                PrevImagen && <video autoPlay src={PrevImagen} alt="Preview" style={{ width: '300px', marginTop: '20px' }} />
            }
            <button>Publicar</button>
        </form>
    )
}

export default InputPost

