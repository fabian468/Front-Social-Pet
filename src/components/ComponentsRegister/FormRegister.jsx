import React, { useState } from 'react'
import { userRegister } from '../../services/login'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from '../../helpers/ValidateEmail'
import SelectOptionPaises from './SelectOptionPaises'

function FormRegister() {
    const [nombreRegistro, setNombreRegistro] = useState(undefined)
    const [emailRegistro, setEmailRegistro] = useState(undefined)
    const [paisRegistro, setPaisRegistro] = useState(undefined)
    const [claveRegistro, setclaveRegistro] = useState(undefined)
    const [repetirClaveRegistro, setRepetirClaveRegistro] = useState(undefined)
    const [image, setImage] = useState(undefined)

    const [errorClave, seterrorClave] = useState(false)

    const errores = {
        1: "Campo necesario",
        2: "Error en el email",
        3: "Error en clave"

    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };


    const navigate = useNavigate()

    async function HandlerSubmit(e) {
        e.preventDefault();

        const emailValidate = validateEmail(emailRegistro)

        if (claveRegistro === repetirClaveRegistro && emailRegistro !== undefined) {
            if (emailValidate) {
                const res = await userRegister(nombreRegistro, emailRegistro, paisRegistro, claveRegistro, image)
                if (res.message === "Usuario registrado exitosamente") {
                    navigate("/home/post")
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('idUser', res.user._id);
                }
            } else {
                return "error"
            }
        } else {
            seterrorClave(true)
        }
    }


    return (
        <form className='formularioRegistro' onSubmit={(e) => {
            HandlerSubmit(e)
        }} >
            <p>Registrate</p>
            <div className='sectionrow'>
                <div>
                    <label htmlFor="nombreRegister">Nombre:</label>
                    <input id='nombreRegister' type="text" onChange={(e) => setNombreRegistro(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="emailRegister">Email:</label>
                    <input id='emailRegister' type="email" onChange={(e) => setEmailRegistro(e.target.value)} />
                </div>
            </div>
            <div>
                <label htmlFor="paisRegistro">País:</label>
                <SelectOptionPaises setPais={setPaisRegistro} />
            </div>
            <div>
                <label htmlFor="avatar">Imagen perfil</label>
                <input type="file" id='avatar' onChange={handleImageChange} />
            </div>
            <div className='sectionrow'>
                <div>
                    <label htmlFor="passwordLogin">Clave:</label>
                    <input id='passwordLogin' type="password" onChange={(e) => {
                        seterrorClave(false)
                        setclaveRegistro(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="repeatPasswordRegister">Repetir Clave:</label>
                    <input id='repeatPasswordRegister' type="password" onChange={(e) => {
                        seterrorClave(false)
                        setRepetirClaveRegistro(e.target.value)
                    }} />
                </div>
            </div>
            {errorClave && <p>La clave no coincide</p>}
            <div>
                <button>Regitrarme</button>
            </div>
        </form>
    )
}

export default FormRegister