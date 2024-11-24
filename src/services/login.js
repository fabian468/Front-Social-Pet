import { URIIMG } from "../config"

const URI = `${URIIMG}/api/`

export async function userLogin(email, password) {
    try {
        console.log(URI + "login")
        const res = await fetch(URI + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            return res.json()
        }

        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e)
    }
}

export async function userRegister(name, email, country, password, image) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('password', password);
    formData.append('image', image);
    try {
        const res = await fetch(URI + "users", {
            method: "POST",
            body: formData,
            headers: {
            }
        });

        if (!res.ok) {
            return await res.json()
        }

        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e)
    }
}

export async function modImage(imagen, idUser) {
    const formData = new FormData();
    formData.append('image', imagen)

    try {
        //http://localhost:4000/api/user/66ff3c601e3fe862a3d7f075/image
        const res = await fetch(URI + "user/" + idUser + "/image", {
            method: "PUT",
            body: formData,
            headers: {
            }
        });
        const data = await res
        return data
    } catch (e) {
        console.log(e)
    }
}
