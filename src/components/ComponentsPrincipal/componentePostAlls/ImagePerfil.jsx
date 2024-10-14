import React from 'react'
import { URIIMG } from '../../../config'
import avatar from "../../../img/avatar.jpg";

function ImagePerfil({ dataUser, width2, height2 }) {
    return (
        <div>
            <img
                src={dataUser.image ? URIIMG + dataUser.image.replace(/\\/g, '/') : avatar}
                alt="perfil socialpet"
                style={{
                    width: width2,
                    height: height2,
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />
        </div>
    )
}

export default ImagePerfil