import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { unfollowHelps } from '../services/helps';


export const showSwalseguimiento = (idUser, idCaso) => {
    withReactContent(Swal).fire({
        title: "Estas seguro que desea dejar seguir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, dejar!",
        cancelButtonText: "Cancelar"

    }).then((result) => {
        if (result.isConfirmed) {
            if (unfollowHelps(idUser, idCaso)) {
                withReactContent(Swal).fire({
                    title: "dejo de seguir :(",
                    icon: "success"
                });
            } else {
                withReactContent(Swal).fire({
                    title: "¡Ocurrió un problema!",
                    text: "No fue posible dejar de seguir el caso.",
                    icon: "warning"
                });
            }
        }
    })

}
