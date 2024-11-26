
function InfoAnimal({ data }) {

    return (
        <table className="ContenedorDatosAnimalAyudas">
            <tbody>
                <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>Fecha publicación: {data.createdAt}</td>
                </tr>
                <tr>
                    <td style={{ textAlign: "center" }}>Autor de la publicación: {data.author.name}</td>
                    <td colSpan="2" style={{ textAlign: "center" }}>Email para contacto: {data.author.email}</td>
                </tr>
                <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>Asunto: {data.Titulo}</td>
                </tr>
                <tr >
                    <td style={{ textAlign: "center" }}>Nombre del animal: {data.nombredelAnimal}</td>
                    <td style={{ textAlign: "center" }}>Ubicación del animal: {data.ubicacionAnimal}</td>
                    <td style={{ textAlign: "center" }}>Sexo del animal: Macho</td>
                </tr>
                <tr>
                    <td colSpan="3" ><h3 style={{ textAlign: "center" }}>Cantidad de ayuda recibida: ${data.cantidadAyuda}</h3></td>
                </tr>
            </tbody>
        </table>
    )
}

export default InfoAnimal