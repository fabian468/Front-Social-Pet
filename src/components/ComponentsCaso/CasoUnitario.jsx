import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from "../../img/img_1.jpg";
import img2 from "../../img/img_4.jpg";
import img3 from "../../img/img_3.jpg";
import img4 from "../../img/img_2.jpg";

function CasoUnitario() {
    const { scrollYProgress } = useScroll();


    const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

    const x2 = useTransform(scrollYProgress, [0.2, 0.4], [200, 0]);
    const x2_1 = useTransform(scrollYProgress, [0.2, 0.4], [-200, 0]);
    const x3 = useTransform(scrollYProgress, [0.4, 0.6], [-200, 0]);
    const x4 = useTransform(scrollYProgress, [0.6, 0.8], [200, 400]);

    return (
        <div className="container">

            <h2>Caso Juanito el gato</h2>
            <button style={{ zIndex: "1000", cursor: "pointer", border: "none", borderRadius: "30px", position: "fixed", width: "10%", backgroundColor: "green", color: "#fff" }} >Donar</button>
            <div >
                <img src={img1} alt="Imagen 1" />
            </div>

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
