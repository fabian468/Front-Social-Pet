export function verificarVideo(input) {
    if (input && input.files && input.files[0]) {
        const file = input.files[0];

        if (!file) {
            console.log("No se ha seleccionado ningún archivo.");
            return false;
        }

        const tiposDeVideo = ['video/mp4', 'video/webm', 'video/ogg'];
        const tiposDeImagen = ['image/jpeg', 'image/png', 'image/gif'];

        if (tiposDeVideo.includes(file.type)) {
            console.log("Es un video.");
            return true;
        } else if (tiposDeImagen.includes(file.type)) {
            console.log("Es una imagen.");
            return false;
        } else {
            console.log("El archivo no es ni video ni imagen.");
            return false;
        }
    }

    // Verificar si el input es una URL
    if (typeof input === 'string') {
        try {
            const extensionesDeVideo = ['.mp4', '.webm', '.ogg'];

            return extensionesDeVideo.some(ext => input.endsWith(ext));
        } catch (error) {
            console.error("Error al verificar la URL:", error);
            return false;
        }
    }

    console.log("Input no válido.");
    return false;
}



export const verificarDuracionVideo = (input, setVideoDuration) => {
    const file = input.files[0];

    if (file && file.type.startsWith('video/')) {
        const videoUrl = URL.createObjectURL(file);
        const videoElement = document.createElement('video');

        videoElement.src = videoUrl;
        videoElement.onloadedmetadata = function () {
            if (videoElement.duration <= 120) {
                setVideoDuration(true);
            } else {
                setVideoDuration(false);
            }
            URL.revokeObjectURL(videoUrl);
        };
    }
};