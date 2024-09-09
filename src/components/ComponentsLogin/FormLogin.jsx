import React, { useEffect, useState } from 'react'
import { userLogin } from '../../services/login'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from '../../helpers/ValidateEmail'


function FormLogin() {
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [mantenerSesion, setMantenerSesion] = useState(true)
    const [errorEmail, serErrorEmail] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);



    async function handlerseubmit(e) {
        e.preventDefault();
        const res = await userLogin(email, password)
        if (res.token && mantenerSesion) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('idUser', res.idUser);
            navigate('/home');
        } else if (!mantenerSesion) {
            navigate('/home');
            localStorage.setItem('idUser', res.idUser);
        } else {
            console.log("No se recibió un token en la respuesta");
        }
    }

    return (
        <form className='formularioLogin' onSubmit={e => handlerseubmit(e)}>
            <div>
                <label htmlFor="">Email:</label>
                <input id='emailLogin' type="email" onChange={(e) => {
                    if (validateEmail(e.target.value)) {
                        setEmail(e.target.value)
                        serErrorEmail(false)
                    } else serErrorEmail(true)
                }} />
                {errorEmail && <p>lol</p>}
            </div>
            <div>
                <label htmlFor="passwordLogin">Password:</label>
                <input id='passwordLogin' type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>

                <input id='mantSesion' type="checkbox" checked={mantenerSesion} onChange={e => setMantenerSesion(e.target.checked)} />
                <label htmlFor="mantSesion">Mantener sesión</label>
            </div>
            <button>Ingresar</button>

        </form>
    )
}

export default FormLogin