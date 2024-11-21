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


export async function getOneHelpsId(id) {
    try {
        const res = await fetch(`${URIIMG}/post/helps/${id}`)

        if (!res.ok) {
            return false
        }

        const data = await res.json()
        return data
    } catch {
        console.log("error")
    }

}


export async function commentsHelps(helpId, userId, comment) {
    try {

        const res = await fetch(URIIMG + "/post/helps/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ helpId, userId, comment }),
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


export async function deleteCommentshelps(helpId, commentId) {

    try {
        const response = await fetch(URIIMG + 'posts/' + helpId + '/comments/' + commentId, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el comentario');
        }

        const result = await response.json();
        return result
    } catch (error) {
        return ('Error al eliminar el post:', error);
    }
}