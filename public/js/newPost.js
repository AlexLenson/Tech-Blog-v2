const newPostFormHandler = async (event) => {
    const title = document.querySelector("#newPostTitle").value
    const content = document.querySelector("#newPostText").value
    event.preventDefault();
    console.log(title, content)

    // i can create new post but user_id is null. also doesnt show up on page
    const response = await fetch("/api/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {

        window.location.reload()
    } else {
        alert("oops! Something went wrong")
    }

}

const savebtn = document.querySelector("#savePost")

savebtn.addEventListener("click", newPostFormHandler)