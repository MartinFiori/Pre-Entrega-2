// STOCK
const stocks = []
const carrito = []


class Stock {
    constructor(id, nombre, precio, img) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.img = img;
        this.cantidad = 1;
    }
    agregarCantidad(valor) {
        this.cantidad += valor;
    }
    subtotal() {
        return this.cantidad * this.precio;
    }
}



stocks.push(new Stock(1, "Papas", 240, "./assets/papas.jpg"))
stocks.push(new Stock(2, "Hamburguesa", 440, "./assets/burger.jpg"))
stocks.push(new Stock(3, "Shis", 690, "./assets/shis.jpg"))
stocks.push(new Stock(4, "Tequeños", 340, "./assets/tequenios.jpg"))
stocks.push(new Stock(5, "Empanadas", 720, "./assets/empanadas.jpg"))
stocks.push(new Stock(6, "Pizza", 430, "./assets/pizzas.jpg"))
stocks.push(new Stock(7, "Canastitas", 130, "./assets/canastitas.jpg"))