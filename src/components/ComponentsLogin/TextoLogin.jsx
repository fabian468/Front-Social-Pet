import React from 'react'
import img1 from "../../img/login/1.png"
import img2 from "../../img/login/2.png"
import img3 from "../../img/login/3.png"

function TextoLogin() {
    return (
        <div className='contenedorTextoLogin'>
            <div><img src={img1} alt="" /><p>Ayuda</p></div>
            <div><img src={img2} alt="" /><p>Publica</p></div>
            <div><img src={img3} alt="" /><p>Comparte alegrias</p></div>
        </div>
    )
}

export default TextoLogin