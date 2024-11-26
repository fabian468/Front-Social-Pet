import React, { useEffect, useState } from 'react';
import "../../styles/datosAnimales.css"

import Donaciones from './Donaciones';
import { useParams } from 'react-router-dom';
import { getOneHelpsHistoriaId, getOneHelpsId } from '../../services/helps';
import { URIIMG } from '../../config';
import { verificarVideo } from '../../helpers/isVideo';
import InfoAnimal from './InfoAnimal';
import { canUserDeletePost } from '../../helpers/canDeletePost';
import FormAgregarHistoria from './FormAgregarHistoria';
import HistoriaDeLosCaso from './HistoriaDeLosCasos';

function CasoUnitario() {
    const [abrirDonar, setAbrirDonar] = useState(false)
    const [abrirFormAgregarHistoria, setAbrirFormAgregarHistoria,] = useState(false)
    const [dataCaso, setDataCaso] = useState([])
    const [historias, setHistorias] = useState(null);


    const { id } = useParams()

    useEffect(() => {
        async function obtenerDatosDeCasos() {
            try {
                const [helpData, historiasData] = await Promise.all([
                    getOneHelpsId(id),
                    getOneHelpsHistoriaId(id),
                ]);

                setDataCaso(helpData);
                setHistorias(historiasData);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }
        obtenerDatosDeCasos()
    }, [id])

    return (
        <div className="container">

            <h2 className='tituloCaso'>Caso {dataCaso.nombredelAnimal}</h2>
            <button
                style={{
                    zIndex: "1000",
                    cursor: "pointer", border: "none",
                    borderRadius: "30px", position: "fixed",
                    width: "10%", backgroundColor: "green",
                    color: "#fff"
                }}
                onClick={() => setAbrirDonar(!abrirDonar)} >Donar
            </button>
            <button
                style={{
                    zIndex: "1000",
                    cursor: "pointer", right: "350px", border: "none",
                    borderRadius: "30px", position: "fixed", width: "10%",
                    backgroundColor: "blue", color: "#fff"
                }}
                onClick={() => setAbrirDonar(!abrirDonar)} >Seguir caso
            </button>

            {abrirDonar && <Donaciones closeDonation={setAbrirDonar} />}

            <div >
                {verificarVideo(`${URIIMG}/${dataCaso.image}`) ? <video autoPlay style={{ aspectRatio: "16/9" }} controls src={`${URIIMG}/${dataCaso.image}`} alt="Imagen 1" /> :
                    <img style={{ aspectRatio: "16/9" }} src={`${URIIMG}/${dataCaso.image}`} alt="Imagen 1" />
                }
            </div>
            {canUserDeletePost(dataCaso.author?._id) && <span className='abrirFormAhistoria' onClick={() => setAbrirFormAgregarHistoria(!abrirFormAgregarHistoria)}>Agregar una historia a tu caso</span>}

            {abrirFormAgregarHistoria && <FormAgregarHistoria setcerrar={setAbrirFormAgregarHistoria} idCaso={id} />}

            {dataCaso.Titulo && <InfoAnimal data={dataCaso} />}

            <HistoriaDeLosCaso historias={historias} />

        </div>
    );
}

export default CasoUnitario;
