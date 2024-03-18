let icone_menu = document.getElementById("icone-menu")
let menu_nav = document.getElementById("menuNavegacao")

function AparecerMenu() {
    if (menuNavegacao.style.display == "block") {
        menu_nav.style.display = "none"
    } else {
        menu_nav.style.display = "block"
    } 
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu_nav.style.display = "block"
    } else {
        menu_nav.style.display = "none"
    }
}