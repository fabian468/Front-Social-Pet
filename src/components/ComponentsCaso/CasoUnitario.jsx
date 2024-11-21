import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img2 from "../../img/img_4.jpg";
import img3 from "../../img/img_3.jpg";
import img4 from "../../img/img_2.jpg";
import Donaciones from './Donaciones';
import { useParams } from 'react-router-dom';
import { getOneHelpsId } from '../../services/helps';
import { URIIMG } from '../../config';
import { verificarVideo } from '../../helpers/isVideo';
import InfoAnimal from './InfoAnimal';

function CasoUnitario() {
    const [abrirDonar, setAbrirDonar] = useState(false)
    const { scrollYProgress } = useScroll();
    const [dataCaso, setDataCaso] = useState([])

    const { id } = useParams()

    useEffect(() => {
        async function obtenerDatosDeCasos() {

            setDataCaso(await getOneHelpsId(id))
        }
        obtenerDatosDeCasos()
    }, [id])

    const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

    const x2 = useTransform(scrollYProgress, [0.2, 0.4], [200, 0]);
    const x2_1 = useTransform(scrollYProgress, [0.2, 0.4], [-200, 0]);
    const x3 = useTransform(scrollYProgress, [0.4, 0.6], [-200, 0]);
    const x4 = useTransform(scrollYProgress, [0.6, 0.8], [200, 400]);

    return (
        <div className="container">

            <h2>Caso {dataCaso.nombredelAnimal}</h2>
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

            {dataCaso.Titulo && <InfoAnimal data={dataCaso} />}

            {/* {entonces tendria que colocar cada actualizacion del estado del caso del animal aparte 
en un componente donde le tendre que hacer un map e ir listandola en el casoUnitario y en la home mostrar como post con sus comentarios 
en ambos lados ejemplo caso juanito mostramos un post principal en el post principal pondre las ramas de actualizacion del animal 
cuando este agregue una historia de su caso 
} */}

            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <motion.div className="left" style={{ x: x2_1, opacity: opacity2 }}>
                    <div>
                        <p> 04/10/2024</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias in consequuntur amet quas voluptas corrupti. Iure facilis, necessitatibus vel pariatur, voluptate iusto impedit voluptas dolor deserunt libero minima quisquam vero?</p>
                    </div>
                </motion.div>
                <motion.div className="right" style={{ x: x2, opacity: opacity2 }}>
                    <img src={img2} alt="Imagen 2" />
                </motion.div>
            </div>



            <motion.div className="left" style={{ x: x3, opacity: opacity3 }}>
                <img src={img3} alt="Imagen 3" />
            </motion.div>


            <motion.div className="right" style={{ x: x4, opacity: opacity4 }}>
                <img src={img4} alt="Imagen 4" />
            </motion.div>
        </div>
    );
}

export default CasoUnitario;
