import { useState, useEffect } from "react";


function useImagenTransformaciones(imagen) {

    const [transformaciones, setTransformaciones] = useState([]);

    useEffect(() => {

        const nuevasTransformaciones = imagen.map((_, index) => {
            return {
                image: imagen[index],
                isLeft: index % 2 === 0,
            };
        });

        setTransformaciones(nuevasTransformaciones);


    }, [imagen]);

    return transformaciones;
}

export default useImagenTransformaciones;
