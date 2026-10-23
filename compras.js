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

/**
 * Representa la persona que compra a la botiga. Cada usuari té el seu propi carret.
 * @class
 */
class Usuario {
  /**
   * Crea un usuari amb un carret buit.
   * @param {string} nombre - Nom de l'usuari (p. ex. "Juan").
   * @param {string} correo - Correu electrònic de l'usuari.
   */
  constructor(nombre, correo) {
    /** @type {string} Nom de l'usuari. */
    this.nombre = nombre;
    /** @type {string} Correu electrònic de l'usuari. */
    this.correo = correo;
    /** @type {Carrito} Carret propi de l'usuari; es crea buit. */
    this.carrito = new Carrito();
  }

  /**
   * Afegeix un producte al carret de l'usuari.
   * @param {Producto} producto - El producte que es vol comprar.
   * @returns {void}
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Finalitza la compra: calcula el total del carret, el mostra per consola i buida el carret.
   * @returns {void}
   * @example
   * // Mostra: Usuario Juan ha realizado una compra por un total de 1240€
   * usuario.finalizarCompra();
   */
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
