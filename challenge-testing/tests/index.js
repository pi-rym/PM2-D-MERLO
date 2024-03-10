/*Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. 
La clase debe tener los siguientes métodos:
_constructor(): Inicializa el carrito como un array vacío.
_agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
_calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
_aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.*/

class CarritoCompra {
    constructor(){
        this.carrito = [];
    }
    agregarProducto(producto){
        this.carrito.push(producto);
    }
    calcularTotal(){
        let total = 0;
        this.carrito.forEach(producto => {
            total += producto.precio;
        });
        return total; 
    }
    aplicarDescuento(porcentaje){
        const total = this.calcularTotal();
        const descuento = (total * porcentaje)/100;
        return total - descuento;
    }
}

module.exports = CarritoCompra;