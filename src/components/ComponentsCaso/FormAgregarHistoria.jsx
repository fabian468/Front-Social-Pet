import React from 'react'
import '../../styles/formAgregarHistoria.css'
import { useForm } from 'react-hook-form'
import { createHelp } from '../../services/posts'

function FormAgregarHistoria({ setcerrar, idCaso }) {
    const { register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data.file1)
        if (data.file1 && data.file1.length > 0) {
            const nuevaHelp = await createHelp(
                data.historia,
                data.file1[0],
                localStorage.getItem('idUser'),
                null,
                null,
                null,
                idCaso
            );

            if (nuevaHelp) {
                reset()
                return "ok"
            };
        } else {
            console.error("No se seleccionó una imagen.");
        }
    });


    return (
        <form onSubmit={onSubmit} className='formAgregarHistoria'>
            <p onClick={() => setcerrar(false)} >X</p>
            <textarea
                {...register("historia", {
                    required: {
                        value: true,
                        message: "La historia es requerida"
                    }
                })}
                placeholder='Actualiza la historia' ></textarea>
            <input {...register("file1",
                {
                    required: false
                })}
                type="file"
                accept="image/*, video/*"
                name="file1"
                id="" />
            {
                errors.historia && <span>{errors.historia.message} </span>
            }
            <button>Agregar historia</button>
        </form>
    )
}

export default FormAgregarHistoria