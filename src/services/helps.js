import { URIIMG } from "../config"


export async function getAllHelps() {
    try {
        const res = await fetch(URIIMG + "/post/helps")

        if (!res.ok) {
            return false
        }

        const data = await res.json()
        return data
    } catch {
        console.log("error")
    }

}