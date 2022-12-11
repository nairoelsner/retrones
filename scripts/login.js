function registerUser(){
    const signupInfo = document.querySelectorAll(".register")

    const userName = signupInfo[0].value
    const userEmail = signupInfo[1].value
    const userPassword = signupInfo[2].value

    if (localStorage.getItem(userEmail) == null){
        user = {
            "name": userName,
            "email": userEmail,
            "password": userPassword
        }
        localStorage.setItem(userEmail, JSON.stringify(user))
    }
}


function loginUser(){
    const loginInfo = document.querySelectorAll(".enter")

    const userEmail = loginInfo[0].value
    const userPassword = loginInfo[1].value

    if (localStorage.getItem(userEmail) == null){
        console.log("oie")
        loginInfo[0].value = ""
        loginInfo[1].value = ""
    }else{
        user = JSON.parse(localStorage.getItem(userEmail))
        if (user.password == userPassword){
            localStorage.setItem("logado", true)
            localStorage.setItem("currentUser", JSON.stringify(user))
            window.location.href = "index.html"
        }else{
            loginInfo[0].value = ""
            loginInfo[1].value = ""
        }
    }
}