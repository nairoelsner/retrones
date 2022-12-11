function createNav(){
    let nav = document.querySelector('.navbar');
    localStorage.getItem("logado") == "false" ? loginLink = "login.html" : loginLink = "user.html"
    
    nav.innerHTML = 
    `<div class="nav">
        <a href="index.html"><img src="img/logo.png" class="brand-logo" alt=""></a>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" id="search-box" placeholder="Search product">
                <button class="search-btn" onclick="search()">search</button>
            </div>
            <a href="${loginLink}"><img src="img/user.png" alt=""></a>
            <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="search.html?atari" class="link">Atari</a></li>
        <li class="link-item"><a href="search.html?microsoft" class="link">Microsoft</a></li>
        <li class="link-item"><a href="search.html?nintendo" class="link">Nintendo</a></li>
        <li class="link-item"><a href="search.html?sega" class="link">SEGA</a></li>
        <li class="link-item"><a href="search.html?sony" class="link">Sony</a></li>
    </ul>`

}

createNav()

function search(){
    const searchBox = document.getElementById("search-box")
    window.location.href = `search.html?${searchBox.value}`
}