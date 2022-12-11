const productSection = document.querySelectorAll(".product-container")

for(let i = 0; i < 5; i++){
    product = JSON.parse(localStorage.getItem(`product-${i}`))
        productSection[0].innerHTML += 
        `<div class="container">
            <div class="card" id = "${product.color}">
                <div class="imgBx">
                    <a href="product.html?${product.id}"><img src="img/products/${product.imagens[0]}"></a>
                </div>
                <div class="contentBx">
                    <h2>${product.nome}</h2>
                    <div class="size" id="marca">
                        <h3>Marca: ${product.fabricante}</h3>
                    </div>
                    <div class="color" id="lancamento">
                        <h3>Lançamento: ${product.lancamento}</h3>
                    </div>
                </div>
            </div>
        </div>`
}

for(let i = 16; i < 21; i++){
    product = JSON.parse(localStorage.getItem(`product-${i}`))
        productSection[1].innerHTML += 
        `<div class="container">
            <div class="card" id = "${product.color}">
                <div class="imgBx">
                    <a href="product.html?${product.id}"><img src="img/products/${product.imagens[0]}"></a>
                </div>
                <div class="contentBx">
                    <h2>${product.nome}</h2>
                    <div class="size" id="marca">
                        <h3>Marca: ${product.fabricante}</h3>
                    </div>
                    <div class="color" id="lancamento">
                        <h3>Lançamento: ${product.lancamento}</h3>
                    </div>
                </div>
            </div>
        </div>`
}