const createComment = async (event) => {

    const content = document.querySelector('#commentBody').value
    const post_id = document.querySelector("#postTitle").getAttribute("data-id")


    console.log(commentBody, postTitle);

    const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({
            content,
            post_id

        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.reload()
    } else {
        alert('Failed to give opinion');
    }
}
    
    document.querySelector("").
    addEventListener("click", createComment)