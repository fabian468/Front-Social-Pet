import React, { useEffect, useState } from 'react'
import '../styles/help.css'
import { getAllHelpsFollow } from '../services/helps';
import CardCasosSiguiendo from '../components/ComponentsSiguiendo/CardCasosSiguiendo';
import '../styles/casosSiguiendo.css'

function Help() {
    const [dataHelpSiguiendo, setdataHelpSiguiendo] = useState([])

    useEffect(() => {

        const obtenerHelps = async () => {
            const id = localStorage.getItem('idUser')
            const datos = await getAllHelpsFollow(id)
            setdataHelpSiguiendo(datos.casesFollow)
        }
        obtenerHelps()
    }, [])

    return (
        <div className='contendorHelping'>
            <CardCasosSiguiendo dataHelpSiguiendo={dataHelpSiguiendo} />
        </div>
    )
}

export default Help