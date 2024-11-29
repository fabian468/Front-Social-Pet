import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { seguirElCaso } from '../services/getUsers';




export const showSwalseguimientoDelCaso = (id, idCaso) => {
    console.log(id, idCaso)
    withReactContent(Swal).fire({
        position: "top-end",
        icon: "success",
        title: "Listo estas siguiendo el caso :)",
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        const res = seguirElCaso(id, idCaso)
        if (res) {
        } else {
            withReactContent(Swal).fire({
                title: "¡Ocurrió un problema!",
                text: "No fue posible seguir el caso.",
                icon: "warning"
            });
        }

    })

}
