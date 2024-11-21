
function InfoAnimal({ data }) {
    console.log(data)
    return (
        <div>
            <p style={{ textAlign: "center" }}>Autor de la publicación: {data.author.name}</p>
            <p style={{ textAlign: "center" }}>Email para contacto: {data.author.email}</p>
            <p style={{ textAlign: "center" }}>Asunto: {data.Titulo}</p>
            <p style={{ textAlign: "center" }}>Fecha publicación: {data.createdAt}</p>
            <p style={{ textAlign: "center" }}>Nombre del animal: {data.nombredelAnimal}</p>
            <p style={{ textAlign: "center" }}>Ubicación del animal: {data.ubicacionAnimal}</p>
            <p style={{ textAlign: "center" }}>Sexo del animal: Macho</p>

            <h3 style={{ textAlign: "center" }}>Cantidad de ayuda recibida: ${data.cantidadAyuda}</h3>
        </div>
    )
}

export default InfoAnimal