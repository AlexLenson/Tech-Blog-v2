const newPostFormHandler = async () => {
    const title = document.querySelector("#newPostTitle").value
    const content = document.querySelector("#newPostText").value
    console.log(title, content)

    const response = await fetch("/api/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        closeModal()
        window.location.reload()
    } else {
        alert("oops! Something went wrong")
    }

}

const savebtn = document.querySelector("#savePost")

savebtn.addEventListener("click", newPostFormHandler)