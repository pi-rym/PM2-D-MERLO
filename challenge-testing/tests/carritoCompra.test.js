const CarritoCompra = require("./index");

/* 
Debería crearse una instancia de la clase CarritoCompra antes de cada test.
_El método agregarProducto debería agregar un producto al carrito.
_El método calcularTotal debería sumar el precio de todos los productos del carrito.
_El método calcularTotal debería devolver 0 si no hay productos en el carrito.
_El método aplicarDescuento debería aplicar un descuento al total de la compra según el porcentaje especificado.
_El método aplicarDescuento debería devolver el total sin cambios si el descuento es 0.
*/

describe("CarritoCompra", () => {
  let instancia;
  beforeEach(() => {
    instancia = new CarritoCompra;
  });


  describe("agregarProducto", () => {
    it("Debería agregar un producto al carrito", () => {
      instancia.agregarProducto({ nombre: "Producto1", precio: 10 });
      expect(instancia.carrito.length).toBe(1);
    });
  })

  describe("calcularTotal", () => {
    it("Debería sumar el precio de todos los productos del carrito", () => {
      instancia.agregarProducto({ nombre: "Producto1", precio: 10 });
      instancia.agregarProducto({ nombre: "Producto2", precio: 20 });
      expect(instancia.calcularTotal()).toBe(30);
    })
    it("Debería devolver 0 si no hay productos en el carrito", () => {
      expect(instancia.calcularTotal()).toBe(0);
    });
  });

  describe("aplicarDescuento", () => {
    it("Debería aplicar un descuento al total de la compra según el porcentaje especificado", () => {
      instancia.agregarProducto({ nombre: "Producto1", precio: 10 });
      instancia.agregarProducto({ nombre: "Producto2", precio: 20 });
      expect(instancia.aplicarDescuento(10)).toBe(27);
    });
    it("Debería devolver el total sin cambios si el descuento es 0", () => {
      instancia.agregarProducto({ nombre: "Producto1", precio: 10 });
      expect(instancia.aplicarDescuento(0)).toBe(10);
    });
  });

});