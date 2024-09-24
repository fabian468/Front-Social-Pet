const URI = "http://localhost:4000/api/";

export async function getUserbyname(letter) {
    try {
        const res = await fetch(URI + "search/" + letter)

        if (!res.ok) {
            return false
        }
        const data = await res.json()
        return data
    } catch {
        console.log("error")
    }

}

export async function verificarAmistad(userId, friendId) {
    try {
        const res = await fetch(URI + "perfil/verifyrequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, friendId }),
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

export async function sendFriensRequest(senderId, receiverId) {
    try {
        const res = await fetch(URI + "perfil/sendsfriends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ senderId, receiverId }),
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


export async function acceptFriensRequest(userId, friendId) {
    try {
        const res = await fetch(URI + "perfil/acceptfriendrequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, friendId }),
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

export async function rejectFriensRequest(userId, friendId) {
    try {
        const res = await fetch(URI + "perfil/rejectFriendRequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, friendId }),
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

export async function getAllFriends(userId) {
    try {
        const res = await fetch(URI + "perfil/GetAllFriends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
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