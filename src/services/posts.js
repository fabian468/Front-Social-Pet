const URI = "http://localhost:4000/post/";

export async function ViewAllPosts() {
    const res = await fetch(URI + "postsall")

    if (!res.ok) {
        return false
    }

    const data = await res.json()

    return data
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
        console.log('Post creado con éxito:', result);
    } catch (error) {
        console.error('Error al crear el post:', error);
    }
}
