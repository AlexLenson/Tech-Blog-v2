const createComment = async (event) => {

    event.preventDefault();

    const content = document.querySelector('#commentBody').value
    const post_id = document.querySelector("#postTitle").getAttribute("data-id")

    console.log(commentBody, postTitle);
    console.log("content:", content);
    console.log("post_id:", post_id);

    // i can log content and post_id, but post_id and user_id arent showing up in the database!

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
    
document.querySelector("#submit-comment-btn").
    addEventListener("click", createComment)