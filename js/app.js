"use strict"
let botones = document.getElementsByClassName('btn-compra');

for (const boton of botones) {
    boton.addEventListener('click', comprarProducto)
}

// Agrego las ofertas
for (const oferta of ofertas) {
    $(".containerOfertas").append(`<img src="${oferta.img}" class="imgOfertas" alt="">`)
    
}


