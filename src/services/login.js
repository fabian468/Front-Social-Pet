const URI = "http://localhost:4000/api/";

export async function userLogin(email, password) {
    try {
        const res = await fetch(URI + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            return false
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
    console.log(image)
    try {
        const res = await fetch(URI + "users", {
            method: "POST",
            body: formData,
            headers: {
            }
        });

        if (!res.ok) {
            return false
        }

        const data = await res.json();
        console.log("registro exitoso");
        return data;
    } catch (e) {
        console.error(e)
    }
}

