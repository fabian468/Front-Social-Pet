import { URIIMG } from "../config"

const URI = `${URIIMG}/post/`;

export async function ViewAllPosts() {
    try {
        const res = await fetch(URI + "postsall")

        if (!res.ok) {
            return false
        }

        const data = await res.json()

        return data
    } catch (e) {
        console.log("error")
    }

}


export async function createPost(content, image, author) {
    const formData = new FormData();
    formData.append('content', content);
    formData.append('image', image);
    formData.append('author', author);

    try {
        const response = await fetch(URI + 'posts', {
            method: 'POST',
            body: formData, // Enviar formData directamente
            headers: {
            }
        });

        if (!response.ok) {
            throw new Error('Error al crear el post');
        }

        const result = await response.json();
        if (result) {
            return result
        } else {
            alert("error")
        }

    } catch (error) {
        console.error('Error al crear el post:', error);
    }
}

export async function createHelp(content, image, author, nombredelAnimal, ubicacionAnimal, tipoAyudaNecesitada, esHitoria) {
    console.log(content, image, author, nombredelAnimal, ubicacionAnimal, tipoAyudaNecesitada, esHitoria)
    const formData = new FormData();
    formData.append('Titulo', content);
    formData.append('video', image);
    formData.append('author', author);
    formData.append('nombredelAnimal', nombredelAnimal);
    formData.append('ubicacionAnimal', ubicacionAnimal);
    formData.append('tipoAyudaNecesitada', tipoAyudaNecesitada);
    formData.append('esHistoria', esHitoria);

    try {
        const response = await fetch(URI + 'helps', {
            method: 'POST',
            body: formData,
            headers: {
            }
        });

        if (!response.ok) {
            throw new Error('Error al crear el post');
        }

        const result = await response.json();
        if (result) {
            return result
        } else {
            alert("error")
        }

    } catch (error) {
        console.error('Error al crear el post:', error);
    }
}



export async function deletePost(idPost, ishelp) {

    try {
        const response = !ishelp ? await fetch(URI + 'posts/' + idPost, {
            method: 'DELETE'
        }) :
            await fetch(URI + 'helps/' + idPost, {
                method: 'DELETE'
            })


        if (!response.ok) {
            throw new Error('Error al eliminar el post');
        }

        const result = await response.json();
        return result
    } catch (error) {
        return ('Error al crear el post:', error);
    }
}


export async function getDataUserPerfil(authorId) {
    try {

        const res = await fetch(URI + 'postsuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ authorId }),
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


export async function commentsPost(postId, userId, comment) {
    try {


        const res = await fetch(URI + "posts/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId, userId, comment }),
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

export async function deleteComments(postId, commentId, isHelps) {
    try {
        const response = !isHelps ? await fetch(URI + 'posts/' + postId + '/comments/' + commentId, {
            method: 'DELETE'
        }) : await fetch(URI + 'helps/' + postId + '/comments/' + commentId, {
            method: 'DELETE'
        })

        if (!response.ok) {
            throw new Error('Error al eliminar el comentario');
        }
        const result = await response.json();
        return result
    } catch (error) {
        return ('Error al eliminar el post:', error);
    }
}