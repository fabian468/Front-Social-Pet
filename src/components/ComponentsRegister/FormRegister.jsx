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

    const [errorClave, seterrorClave] = useState(false)

    const errores = {
        1: "Campo necesario",
        2: "Error en el email",
        3: "Error en clave"

    }

    const navigate = useNavigate()

    async function HandlerSubmit(e) {
        e.preventDefault();

        const emailValidate = validateEmail(emailRegistro)

        if (claveRegistro === repetirClaveRegistro && emailValidate) {
            const res = await userRegister(nombreRegistro, emailRegistro, paisRegistro, claveRegistro)
            if (res) navigate("/")
        } else if (!emailValidate) {
            return "error"
        } else {
            seterrorClave(true)
        }
    }


    return (
        <form className='formularioRegistro' onSubmit={(e) => {
            HandlerSubmit(e)
        }} >
            <p>Registrate</p>
            <div>
                <label htmlFor="nombreRegister">Nombre:</label>
                <input id='nombreRegister' type="text" onChange={(e) => setNombreRegistro(e.target.value)} />
            </div>
            <div>
                <label htmlFor="emailRegister">Email:</label>
                <input id='emailRegister' type="email" onChange={(e) => setEmailRegistro(e.target.value)} />
            </div>
            <div>
                <label htmlFor="paisRegistro">País:</label>
                <SelectOptionPaises setPais={setPaisRegistro} />
            </div>
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
            {errorClave && <p>La clave no es la misma</p>}
            <div>
                <button>Regitrarme</button>
            </div>
        </form>
    )
}

export default FormRegister