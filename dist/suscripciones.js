"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuscripcionComercial = exports.SuscripcionBase = void 0;
// Clase base
class SuscripcionBase {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
exports.SuscripcionBase = SuscripcionBase;
// Solo planes comerciales
class SuscripcionComercial extends SuscripcionBase {
    constructor(nombre, precio) {
        super(nombre);
        this.precio = precio;
    }
}
exports.SuscripcionComercial = SuscripcionComercial;
//# sourceMappingURL=suscripciones.js.map