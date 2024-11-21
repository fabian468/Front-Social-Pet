import React, { useState } from 'react'
import FormLogin from '../components/ComponentsLogin/FormLogin'
import "../styles/login.css"
import SimpleSlider from '../components/ComponentsLogin/SimpleSlider'
import TextoLogin from '../components/ComponentsLogin/TextoLogin'
import Nav from '../components/ComponentsPrincipal/Nav'
import FormRegister from '../components/ComponentsRegister/FormRegister'
import "../styles/register.css"


function Login() {

    const [abrirRegistro, setAbrirRegistros] = useState(false);

    return (
        <div className='contenedorPageLogin'>
            <Nav contenido={<FormLogin abrirRegistro={abrirRegistro} setAbrirRegistro={setAbrirRegistros} />} />
            <div className='contenedorContenidoLogin'>
                <SimpleSlider />
                <TextoLogin />
                <FormRegister abrirRegistro={abrirRegistro} setAbrirRegistro={setAbrirRegistros} />
            </div>
        </div>
    )
}

export default Login