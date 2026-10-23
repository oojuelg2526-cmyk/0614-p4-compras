# Compres · documentació i control de versions

Pràctica de la píndola **P4 · Documentació i control de versions** del mòdul 0614 *Desplegament d'aplicacions web* (DAW2A, Politècnics, curs 2026/27).

## Què és
`compras.js` simula una botiga en línia molt senzilla amb tres classes:

| Classe | Què representa | Mètodes |
|---|---|---|
| `Producto` | Un article amb nom, preu i quantitat | `calcularTotal()` |
| `Carrito` | La llista de productes que vol comprar un usuari | `agregarProducto()`, `calcularTotalCarrito()`, `vaciarCarrito()` |
| `Usuario` | Una persona amb nom, correu i un carret propi | `agregarProductoAlCarrito()`, `finalizarCompra()` |

## Com s'executa
Cal tenir [Node.js](https://nodejs.org/) instal·lat:

```bash
node compras.js
```

Sortida esperada:

```
Usuario Juan ha realizado una compra por un total de 1240€
```

(1 portàtil de 1200 € + 2 ratolins de 20 € = 1240 €)

## Com hem treballat (flux Git)
1. La persona creadora ha creat el repositori amb el codi original a la branca `master`.
2. Cada membre de l'equip clona el repositori: `git clone <url>`.
3. Cada membre crea una branca per a la seva classe (`doc-producto`, `doc-carrito`, `doc-usuario`), hi afegeix els comentaris **JSDoc** i fa `commit` i `push`.
4. Cada membre obre un **pull request** cap a `master`.
5. La persona creadora revisa cada pull request, decideix si l'accepta i, si hi ha conflictes, es resolen en equip.

## Documentació
- Comentaris **JSDoc** dins de `compras.js` (classes, propietats, paràmetres i valors de retorn).
- **Wiki** del repositori: una pàgina per classe i una pàgina amb el funcionament complet.

## Equip
| Membre | Classe documentada |
|---|---|
| Óscar Ojuel González (creador del repositori) | `Producto` |
| Alex Campano | `Carrito` |
| Denys Plyvun | `Usuario` |
