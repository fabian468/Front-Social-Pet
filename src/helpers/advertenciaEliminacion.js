import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { deletePost } from '../services/posts';


export const showSwal = (id, tipoAyudaNecesitada) => {
    withReactContent(Swal).fire({
        title: "Estas seguro que desea eliminar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, elimina!",
        cancelButtonText: "Cancelar"

    }).then((result) => {
        if (result.isConfirmed) {
            if (deletePost(id, tipoAyudaNecesitada)) {
                withReactContent(Swal).fire({
                    title: "Eliminado!",
                    text: "Tu publicación fue eliminada.",
                    icon: "success"
                });
            } else {
                withReactContent(Swal).fire({
                    title: "¡Ocurrió un problema!",
                    text: "No fue posible eliminar el post.",
                    icon: "warning"
                });
            }
        }
    })

}
