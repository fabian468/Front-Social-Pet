import React from 'react'
import FormRegister from '../components/ComponentsRegister/FormRegister'
import "../styles/register.css"

function Register() {
    return (
        <div className='contenFormRegister'>
            <div>
                <h1>Social<b>Pet</b></h1>
                <FormRegister />
            </div>

        </div>
    )
}

export default Register