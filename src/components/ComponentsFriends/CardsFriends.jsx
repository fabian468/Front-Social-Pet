import React from 'react'
import { useHaveFriends } from '../../hooks/useHaveFriends'
import { URIIMG } from '../../config'
import { Link } from 'react-router-dom'


function CardsFriends() {
    const { data, loading, error } = useHaveFriends(localStorage.getItem('idUser'))


    if (loading) return <div className='contenedorPosts'>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    console.log(data)
    return (
        <>
            {
                data ? data.map((d) => {
                    return (
                        <Link to={"../perfil/" + d.name + "/" + d._id}>
                            <div key={d._id} className='contenedorCardAmistad'>
                                <img src={URIIMG + d.image.replace(/\\/g, '/')} alt="" />
                                <div className='ContenedorInfoFriends'>
                                    <p>{d.name}</p>
                                    <p>Amigos desde:</p>
                                    <button>Eliminar amistad</button>
                                </div>
                            </div>
                        </Link>
                    )
                })
                    : <p>Agregue amistad</p>
            }
        </>
    )
}

export default CardsFriends