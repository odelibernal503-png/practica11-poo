export declare abstract class SuscripcionBase {
    nombre: string;
    constructor(nombre: string);
    abstract obtenerAcceso(): void;
}
export declare abstract class SuscripcionComercial extends SuscripcionBase {
    precio: number;
    constructor(nombre: string, precio: number);
    abstract procesarFactura(): void;
}
//# sourceMappingURL=suscripciones.d.ts.map