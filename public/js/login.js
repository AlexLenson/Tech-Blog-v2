const loginHandler = async (e) => {
    e.preventDefault()


    const userLogin = document.querySelector('#userLogin').value
    const userPw = document.querySelector('#userPW').value
    console.log(userLogin, userPw)
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: userLogin,
            password: userPw
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to login');
    }
}

document
    .querySelector(".loginForm")
    .addEventListener("submit", loginHandler)


const registerHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#userRegister').value
    const password = document.querySelector('#pwRegister').value
    console.log(username.value, password.value)

    if (username && password) {
        const response = await fetch('/api/users/', {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' },

        })

        if (response.ok) {
            console.log("it worked!")
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up');
        }
    }
}
document
    .querySelector("#signUpForm")
    .addEventListener("submit", registerHandler)

