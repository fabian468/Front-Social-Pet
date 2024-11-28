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


export async function seguirElCaso(userId, caseId) {
    try {

        const res = await fetch(`${URI}user/follow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, caseId }),
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



