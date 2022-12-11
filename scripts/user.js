const user = JSON.parse(localStorage.getItem("currentUser"))

userInfos = document.querySelector(".user-infos")
console.log(userInfos)

userInfos.innerHTML =
`<p id="user-name">nome: ${user.name}</p>
<p id="user-email">email: ${user.email}</p>
<button onclick="logoutUser()">encerrar sessão</button>`

function logoutUser(){
    localStorage.setItem("logado", false)
    localStorage.removeItem("currentUser")
    window.location.href = "index.html"
}