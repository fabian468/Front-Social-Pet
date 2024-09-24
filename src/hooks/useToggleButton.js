import { useState } from "react";

export function useToggleButton() {
    const [despliegueComentario, setDespliegueComentario] = useState(undefined); // Guardamos el postId o null

    const toggleComentario = (postId) => {

        setDespliegueComentario(prevState => prevState === postId ? undefined : postId);
    };

    return {
        despliegueComentario,
        toggleComentario
    };
}
