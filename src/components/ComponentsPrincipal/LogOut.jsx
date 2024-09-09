import React from 'react'
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function LogOut() {
    const navigate = useNavigate()
    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('idUser');
        navigate("/")
    }
    return (
        <div>
            <div onClick={logout}><MdOutlineLogout /></div>
        </div>
    )
}

export default LogOut