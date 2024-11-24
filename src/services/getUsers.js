import { URIIMG } from "../config"
const URI = `${URIIMG}/api/`

export async function getUser(id) {
    try {
        const res = await fetch(URI + "users/" + id)

        if (!res.ok) {
            return false
        }
        const data = await res.json()
        return data
    } catch {
        console.log("error")
    }

}


