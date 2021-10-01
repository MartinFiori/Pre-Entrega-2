// Con DOM meto las cards
function crearCards(array) {

    array.forEach(elemento => {
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('c9__card');
        tarjeta.innerHTML = `
                                <img src="${elemento.img}" alt="">
                                <h1>${elemento.nombre}</h1>
                                <p><b><i>$${elemento.precio}</i></b></p>
                                <a href="#" id='${elemento.id}' class="btn-compra">Sumar al carrito</a>
                            `

        container.appendChild(tarjeta);
    })
}
crearCards(stocks)



// Filtrado de los productos 
function filtrar() {
    container.innerHTML = '';
    let texto = buscador.value.toLowerCase();

    for (const stock of stocks) {
        let nombre = stock.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            container.innerHTML += `<div class="c9__card">
                                        <img src="${stock.img}" alt="">
                                        <h1>${stock.nombre}</h1>
                                        <p><b><i>$${stock.precio}</i></b></p>
                                        <a href="#" id='${stock.id}' class="btn-compra">Sumar al carrito</a>
                                    </div>`
        }
    }
    if (container.innerHTML === '') {
        container.innerHTML += `<div class="c9__card"><p>Producto no encontrado</p></div>`
    }
    miEvento()
}

buscador.addEventListener('keyup', filtrar)

function miEvento() {
    for (const boton of botones) {
        boton.addEventListener('click', comprarProducto)
    }
}

// AAAAAAAAAAAA======================
function comprarProducto(e) {
    e.preventDefault();
    let encontrado = stocks.find(x => x.id == e.target.id)
    carrito.push(encontrado)
    sumarCarrito(carrito)
}

// Contador de productos en el carrito
function sumarCarrito(carrito) {
    let contador = document.getElementById('contador');
    contador.innerText = carrito.length
}




// Aparecen los icons
let marca = document.querySelector('.c9__container')
marca.onclick = () => {
    let iconos = document.getElementById('iconos')
    iconos.classList.add('mostrar')
}

// Desaparición de los icons y vaciar carrito
let borrar = document.getElementById('tacho');

borrar.addEventListener('click', function () {
    iconos.classList.remove('mostrar')
    while (carrito.length > 0) {
        carrito.pop();
    }
    total = 0
})



// Suma de todo el carrito
let comprar = document.getElementById('comprar')
let total = 0;
comprar.addEventListener('click', function comprar() {
    for (let i = 0; i < carrito.length; i++) {
        total = total + carrito[i].precio;
    }
})

// Popup Enviar compra
comprar.addEventListener('click', function togglePopup() {
    document.getElementById("popup-1").classList.add("active");
    document.body.style.overflow = "hidden";
})







// Mostrar pedido en el popup
comprar.addEventListener('click', function mostrarPedido() {
    for (const producto of carrito) {
        let lista = document.createElement('li');
        lista.innerHTML += `1x ..... $${producto.precio}      <strong>${producto.nombre}</strong>`
        document.getElementById('listaCarrito').appendChild(lista)
    }
})





// Pedido terminado
compraTerminada.addEventListener('click', () => {
    localStorage.setItem("Pedido Terminado", JSON.stringify(carrito))
    console.log("terminado pa");
})