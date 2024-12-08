
import "../../styles/Donaciones.css"
import FormDineroDonacion from "../ComponentsHelps/FormDineroDonacion"


function Donaciones({ closeDonation, idCaso }) {


    return (
        <div style={{ position: "fixed", display: "flex", width: "59%", height: "100vh", justifyContent: "center", zIndex: "1000" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "20px", height: "80%", width: "80%", background: "#093543 ", color: "white", textAlign: "center" }}>
                <p style={{ marginTop: "20px" }}>Donaciones</p>
                <FormDineroDonacion idCaso={idCaso} />
                <p style={{ position: "absolute", right: "10px", top: "0px", cursor: "pointer" }} onClick={() => closeDonation(false)} >X</p>
            </div>
        </div>
    )
}

export default Donaciones