import React from 'react'
import socialPet from '../img/socialpet.png'

function Bienvenida() {
    return (
        <div className='contenedorBienvenida'>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={socialPet} alt="" style={{ width: "200px", margin: "auto" }} />
                <h2>Social<strong>Pet</strong></h2>
            </div>
            <h3>Nuestra Misión 🐾</h3>
            <p>
                En SocialPet, nuestra misión es conectar personas apasionadas por el bienestar animal 🐶🐱
                para rescatar, cuidar y brindar una segunda oportunidad a los animales callejeros.
                Creemos en el poder de la colaboración comunitaria 🤝 para mejorar la vida de miles de animales
                que necesitan un hogar y una familia. A través de nuestra plataforma, no solo facilitamos
                la adopción responsable 🏡 y el reporte de animales perdidos o encontrados 🆘, sino que también
                ofrecemos un espacio donde los usuarios pueden compartir momentos especiales con sus mascotas 📸,
                celebrando el amor y la felicidad que traen a nuestras vidas ❤️.
                Juntos, estamos construyendo una comunidad donde ningún animal quede sin ayuda 🐕‍🦺 y
                donde cada mascota tenga su historia para contar 🐾.
            </p>


        </div>
    )
}

export default Bienvenida