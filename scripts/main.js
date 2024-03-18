function AparecerMenu() {
    if (menuNavegacao.style.display == "block") {
        menuNavegacao.style.display = "none"
    } else {
        menuNavegacao.style.display = "block"
    } 
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menuNavegacao.style.display = "block"
    } else {
        menuNavegacao.style.display = "none"
    }
}