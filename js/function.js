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
}

buscador.addEventListener('keyup', filtrar)



// 
function comprarProducto(e) {
    e.preventDefault();
    let encontrado = stocks.find(x => x.id === e.target.id)
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
marca.onclick= () =>{
    let iconos = document.getElementById('iconos')
    iconos.classList.add('mostrar')
}

// Desaparición de los icons y vaciar carrito
let borrar = document.getElementById('tacho');

borrar.addEventListener('click', function (){
    iconos.classList.remove('mostrar')
    carrito.splice(0,carrito.length)
})

