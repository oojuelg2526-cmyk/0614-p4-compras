/**
 * Representa un article de la botiga i quantes unitats se'n compren.
 * @class
 */
class Producto {
  /**
   * Crea un producte.
   * @param {string} nombre - Nom de l'article (p. ex. "Laptop").
   * @param {number} precio - Preu d'una unitat, en euros.
   * @param {number} cantidad - Nombre d'unitats que es compren.
   */
  constructor(nombre, precio, cantidad) {
    /** @type {string} Nom de l'article. */
    this.nombre = nombre;
    /** @type {number} Preu d'una unitat, en euros. */
    this.precio = precio;
    /** @type {number} Nombre d'unitats. */
    this.cantidad = cantidad;
  }

  /**
   * Calcula el preu total d'aquest producte.
   * @returns {number} El preu unitari multiplicat per la quantitat, en euros.
   * @example
   * new Producto("Mouse", 20, 2).calcularTotal(); // 40
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
