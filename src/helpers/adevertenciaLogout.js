import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';


export const showSwaLogout = (id, tipoAyudaNecesitada) => {
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
            const navigate = useNavigate()
            localStorage.removeItem('token');
            localStorage.removeItem('idUser');
            navigate("/")
        }
    })

}
