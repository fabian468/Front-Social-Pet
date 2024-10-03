import { useForm } from 'react-hook-form'
import { userRegister } from '../../services/login'
import { useNavigate } from 'react-router-dom'
import SelectOptionPaises from './SelectOptionPaises'


function FormRegister() {


    const { register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
        setError
    } = useForm()

    const navigate = useNavigate()


    const onSubmit = handleSubmit(async (data) => {
        const res = await userRegister(data.nombre, data.email, data.pais, data.password, data.avatar[0])

        if (res.message === "Usuario registrado exitosamente") {
            localStorage.setItem('token', res.token);
            localStorage.setItem('idUser', res.user._id);
            reset()
            navigate("/home/post")
        } else if (res.message === "El correo electrónico ya está registrado") {
            setError("email", {
                type: "manual",
                message: "El correo electrónico ya está registrado"
            });
        }
    })


    return (
        <form className='formularioRegistro' onSubmit={onSubmit} >
            <p>Registrate</p>
            <div className='sectionrow'>
                <div>
                    <label htmlFor="nombreRegister">Nombre:</label>
                    <input {...register("nombre", {
                        required: {
                            value: true,
                            message: "Nombre es requerido"
                        },
                        minLength: {
                            value: 2,
                            message: "El nombre debe tener al menos 2 caracteres"
                        },
                    })}
                        id='nombreRegister'
                        type="text" />
                    {
                        errors.nombre && <span>{errors.nombre.message} </span>
                    }

                </div>

                <div>
                    <label htmlFor="emailRegister">Email:</label>
                    <input {...register("email",
                        {
                            required: {
                                value: true,
                                message: "El correo es requerido"
                            },
                            pattern: {
                                value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
                                message: "Correo no valido"
                            }
                        })}
                        id='emailRegister'
                        type="email"
                    />
                    {
                        errors.email && <span>{errors.email.message} </span>
                    }
                </div>
            </div>
            <div>
                <label htmlFor="paisRegistro">País:</label>
                <SelectOptionPaises register={register} />
            </div>
            <div>
                <label htmlFor="avatar">Imagen perfil</label>
                <input {...register("avatar",
                    {
                        required: false
                    })}
                    name='avatar'
                    type="file"
                    id='avatar'
                />
            </div>

            <div className='sectionrow'>
                <div>
                    <label htmlFor="passwordLogin">Clave:</label>
                    <input {...register("password",
                        {
                            required: {
                                value: true,
                                message: "La clave es requerida"
                            },
                            minLength: {
                                value: 6,
                                message: "La clave de tener al menos 6 caracteres"
                            },
                        })}
                        id='passwordLogin'
                        type="password"
                    />
                    {
                        errors.password && <span>{errors.password.message} </span>
                    }

                </div>

                <div>
                    <label htmlFor="repeatPasswordRegister">Repetir Clave:</label>
                    <input {...register("confirmarPassword",
                        {
                            required: {
                                value: true,
                                message: "Es necesario verificar su clave"

                            },
                            validate: (value) => {
                                if (!errors.password) return value === watch("password") || "Las claves no coinciden"
                            }
                        })}
                        id='repeatPasswordRegister'
                        type="password"
                    />
                    {
                        errors.confirmarPassword && <span>{errors.confirmarPassword.message} </span>
                    }
                </div>

            </div>
            <div>
                <button>Regitrarme</button>
            </div>
        </form >
    )
}

export default FormRegister