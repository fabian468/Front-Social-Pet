import React from 'react';
import { URIIMG } from '../../config';

function HistoriaDeLosCaso({ historias }) {

    return (
        <div>
            {historias ? historias.map((trans, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                        marginBottom: "2rem"
                    }}
                >
                    <div
                        className={`image-container ${index % 2 === 0 ? 'left' : 'right'}`}

                    >
                        <img className='imagenHistoria' src={`${URIIMG}/${trans.image}`} alt={`Imagen ${index + 1}`} />
                        <div className='contenedorDatosHistoria'>
                            <p className='fechaCreacionHistoria'>{new Date(trans.createdAt).toLocaleDateString('es-ES')}</p>
                            <p>{trans.Titulo}</p>
                        </div>

                    </div>
                </div>
            )) : <p>Agrega historias </p>}
        </div>
    );
}

export default HistoriaDeLosCaso;
