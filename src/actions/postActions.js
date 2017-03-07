export function openPost(post) {
    return {
        type: "OPEN_POST",
        payload: {
            post: post
        }
    }
}

export function closePost() {
    return {
        type: "CLOSE_POST",
        payload: {
        }
    }
}
