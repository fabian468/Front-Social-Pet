import React from 'react'
import '../../styles/formAgregarHistoria.css'

function FormAgregarHistoria({ setcerrar }) {
    return (
        <form className='formAgregarHistoria'>
            <p onClick={() => setcerrar(false)} >X</p>
            <textarea placeholder='Actualiza la historia' ></textarea>
            <input type="file" name="" id="" />
            <button>Agregar historia</button>
        </form>
    )
}

export default FormAgregarHistoria