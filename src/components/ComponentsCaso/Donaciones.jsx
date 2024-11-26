import "../../styles/Donaciones.css"

import FlipCardsDonaciones from "./FlipCardsDonaciones"

function Donaciones({ closeDonation }) {

    return (
        <div style={{ position: "fixed", display: "flex", width: "59%", height: "100vh", justifyContent: "center", zIndex: "1000" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "20px", height: "80%", width: "80%", background: "#093543 ", color: "white", textAlign: "center", }}>
                Donaciones
                <div className="card" >
                    <FlipCardsDonaciones nombreDonacion={"Dinero"} />
                    <FlipCardsDonaciones nombreDonacion={"Medicamentos"} />
                    <FlipCardsDonaciones nombreDonacion={"Comida"} />
                </div>


                <p style={{ position: "absolute", right: "10px", top: "0px", cursor: "pointer" }} onClick={() => closeDonation(false)} >X</p>
            </div>
        </div>
    )
}

export default Donaciones