if(localStorage.getItem("logado") == null){
    localStorage.setItem("logado", "false")
}


function createProduct(info){
    return {
        "id": info[0],
        "nome": info[1],
        "fabricante": info[2],
        "lancamento": info[3],
        "imagens": info[4],
        "preco": info[5],
        "visitas": info[6],
        "vendas": info[7],
        "color": info[8]
    }
}

function generateProducts(){
    const productsList = 
    [[0, "nintendo 64", "nintendo", 1996, ["nintendo64-1.png", "nintendo64-2.png"], 99.99, 0, 0, "red"],
    [1, "playstation 1", "sony", 1994, ["playstation1-1.png", "playstation1-2.png"], 79.99, 0, 0, "blue"],
    [2, "xbox", "microsoft", 2001, ["xbox-1.png", "xbox-2.png"], 69.99, 0, 0, "green"],
    [3, "atari 2600", "atari", 1977, ["atari2600-1.png", "atari2600-2.png"], 199.99, 0, 0, "yellow"],
    [4, "sega saturn", "sega", 1994, ["segasaturn-1.png", "segasaturn-2.png"], 199.99, 0, 0, "orange"],
    [16, "gameboy advance", "nintendo", 2001, ["gameboy-1.png", "gameboy-2.png"], 99.99, 0, 0, "red"],
    [17, "atari lynx", "atari", 1989, ["atarilynx-1.png", "atarilynx-2.png"], 149.99, 0, 0, "yellow"],
    [18, "sega game gear", "sega", 1990, ["gamegear-1.png", "gamegear-2.png"], 149.99, 0, 0, ""],
    [19, "nintendo ds", "nintendo", 2004, ["nintendods-1.png", "nintendods-2.png"], 129.99, 0, 0, "red"],
    [20, "pocketstation", "sony", 1998, ["pocketstation-1.png","pocketstation-2.png"], 99.99, 0, 0, "blue"]]

    /*
    [[5, "playstation 2", "sony", 2000, ["playstation2-1.png", "playstation2-2.png"], 199.99, 0, 0, "blue"],
    [6, "atari 5200", "atari", 1982, ["atari5200-1.png", "atari5200-2.png"], 199.99, 0, 0, "yellow"],
    [7, "atari 7800", "atari", 1986, ["atari5600-1.png", "atari5600-2.png"], 239.99, 0, 0, "yellow"],
    [8, "atari jaguar", "atari", 1993, ["atarijaguar-1.png", "atarijaguar-2.png"], 279.99, 0, 0, "yellow"],
    [9, "sega dreamcast", "sega", 1998, ["segadreamcast-1.png", "segadreamcast-2.png"], 299.99, 0, 0, ""],
    [10, "sega megadrive", "sega", 1988, ["sega megadrive-1.png", "sega megadrive-2..png"], 349.99, 0, 0, ""],
    [11, "sega mastersystem", "sega", 1986, ["sega mastersystem-1.png", "segamastersystem-2.png"], 399.99, 0, 0, ""],
    [12, "super nintendo", "nintendo", 1990, ["supernintendo-1.png", "supernintendo-2.png"], 299.99, 0, 0, "red"],
    [13, "nintendo 64", "nintendo", 1996, ["nintendo64-1.png", "nintendo64-2.png"], 249.99, 0, 0, "red"],
    [14, "nintendo gamecube", "nintendo", 2001, ["nintendogamecube-1.png", "nintendogamecube-2.png"], 249.99, 0, 0, "red"],
    [15, "nintendinho", "nintendo", 1985, ["nintendinho-1.png", "nintendinho-2.png"], 199.99, 0, 0, "red"],
    */

    for(let i = 0; i < productsList.length; i++){
        let product = createProduct(productsList[i])
        localStorage.setItem(`product-${product.id}`, JSON.stringify(product))
    }
}

if (localStorage.getItem("product-0") == null){
    generateProducts()
}