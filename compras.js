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

/**
 * Representa el carret de la compra: la llista de productes que vol comprar un usuari.
 * @class
 */
class Carrito {
  /**
   * Crea un carret buit.
   */
  constructor() {
    /** @type {Producto[]} Productes afegits al carret. */
    this.productos = [];
  }

  /**
   * Afegeix un producte al final del carret.
   * @param {Producto} producto - El producte que s'afegeix.
   * @returns {void}
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el preu total del carret sumant el total de cada producte.
   * @returns {number} La suma de tots els productes, en euros (0 si el carret és buit).
   * @example
   * // Laptop (1200 × 1) + Mouse (20 × 2)
   * carrito.calcularTotalCarrito(); // 1240
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Buida el carret (elimina tots els productes).
   * @returns {void}
   */
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
