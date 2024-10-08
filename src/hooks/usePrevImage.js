import { useState } from "react";

export const usePrevImage = () => {
    const [PrevImagen, setPrevImagen] = useState(undefined);

    const handleImageChange = (e) => {
        const file = e ? e.target.files[0] : "";
        if (file) {
            setPrevImagen(URL.createObjectURL(file));
        } else {
            setPrevImagen()
        }
    };

    return { PrevImagen, handleImageChange };
};
