// Clase base
export abstract class SuscripcionBase {

    constructor(public nombre: string) {}

    abstract obtenerAcceso(): void;
}

// Solo planes comerciales
export abstract class SuscripcionComercial extends SuscripcionBase {

    constructor(
        nombre: string,
        public precio: number
    ) {
        super(nombre);
    }

    abstract procesarFactura(): void;
}