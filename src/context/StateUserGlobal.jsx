import React, { useEffect, useState } from 'react';
import { stateCompo } from './stateCompo';
import { getUser } from '../services/getUsers';

function StateUserGlobal({ children }) {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        async function getOneUser(id) {
            if (id) {
                const user = await getUser(id);
                setDataUser(user);
            } else {
                console.log("no se encontró user");
            }
        }

        const id = localStorage.getItem('idUser');
        getOneUser(id);

    }, []);


    return (
        <stateCompo.Provider value={{ dataUser, setDataUser }}>
            {children}
        </stateCompo.Provider>
    );
}

export default StateUserGlobal;
