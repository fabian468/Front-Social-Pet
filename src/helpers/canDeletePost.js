export function canUserDeletePost(idPost) {
    const idUser = localStorage.getItem('idUser');
    return idUser === idPost;

}
