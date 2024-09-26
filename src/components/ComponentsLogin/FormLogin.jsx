import React, { useEffect } from 'react'
import { userLogin } from '../../services/login'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function FormLogin() {
    const navigate = useNavigate()

    const { register,
        handleSubmit,
        formState: { errors },
        reset,
        setError

    } = useForm({
        defaultValues: {
            mantenerSesion: true
        }
    })


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home/post');
        }
    }, [navigate]);



    const onSubmit = handleSubmit(async (data) => {
        const res = await userLogin(data.emailLogin, data.passwordLogin)
        console.log(res)
        if (res.token && data.mantenerSesion) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('idUser', res.idUser);
            navigate('/home/post');
            reset()
        } else if (!data.mantenerSesion) {
            navigate('/home/post');
            localStorage.setItem('idUser', res.idUser);
        } else {
            setError("emailLogin", {
                type: "manual",
                message: "Correo o clave errada"
            });
            console.log("No se recibió un token en la respuesta");
        }
    })


    return (
        <form className='formularioLogin' onSubmit={onSubmit}>
            <div>
                <label htmlFor="">Email:</label>
                <input {...register("emailLogin",
                    {
                        required: {
                            value: true,
                            message: "El correo es requerido"
                        },
                        pattern: {
                            value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
                            message: "Correo no valido"
                        }
                    }
                )}
                    id='emailLogin'
                    type="email" />
                {
                    errors.emailLogin && <span>{errors.emailLogin.message} </span>
                }
            </div>

            <div>
                <label htmlFor="passwordLogin">Password:</label>
                <input {...register("passwordLogin", {
                    required: {
                        value: true,
                        message: "La clave es requerida"
                    },
                })
                }
                    id='passwordLogin'
                    type="password"
                />
                {
                    errors.passwordLogin && <span>{errors.passwordLogin.message} </span>
                }
            </div>

            <div>
                <input {...register("mantenerSesion")}
                    id='mantSesion' type="checkbox"
                />
                <label htmlFor="mantSesion">Mantener sesión</label>
            </div>
            <button>Ingresar</button>

        </form>
    )
}

export default FormLogin