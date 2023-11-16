const delBtn = document.querySelector(".delPost")
const upBtn = document.querySelector(".upPost")


const updatePost = async (event) => {
    const upTitle = document.querySelector('#upTitle').value
    const upBody = document.querySelector('#upBody').value

    const id = event.target.getAttribute("data-id")
    const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title: upTitle,
            content: upBody
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/dashboard');
   
    } else {
        alert('Failed to login');
    }
}

const deletePost = async (event) => {
    const id = event.target.getAttribute("data-id")
    console.log("click", id)

    const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        window.location.assign("/dashboard")
       

    } else {
        alert("This post just won't quit")
    }
}

upBtn.addEventListener("click", updatePost)
delBtn.addEventListener("click", deletePost)