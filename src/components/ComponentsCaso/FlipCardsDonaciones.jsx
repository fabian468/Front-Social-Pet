
import ReactFlipCard from 'reactjs-flip-card'

function FlipCardsDonaciones({ nombreDonacion }) {

    const styles = {
        card: { width: '100%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', },
    }

    return (
        <p>
            <span>
                <ReactFlipCard
                    frontStyle={styles.card}
                    frontComponent={<span style={{ width: "100%" }}>{nombreDonacion}</span>}
                    backComponent={<div><label >Monto a donar :<input type="number" /></label><button>Donar</button></div>}
                    flipTrigger="onClick"
                />
            </span>
        </p>
    )
}

export default FlipCardsDonaciones