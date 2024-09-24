import React from 'react'
import { useHaveFriends } from '../../hooks/useHaveFriends'

function CardsFriends() {
    const { data, loading, error } = useHaveFriends(localStorage.getItem('idUser'))


    if (loading) return <div className='contenedorPosts'>Loading...</div>
    if (error) return <div>Error: {error.message}</div>


    return (
        <div>
            {
                data ? data.map((d) => { return <div key={d._id}> <p>{d.name}</p> </div> }) : <p>Agregue amistad</p>
            }
        </div>
    )
}

export default CardsFriends