import {
    IStreaming,
    IDescargas,
    ISoporteVIP
} from "./interfaces";

import {
    SuscripcionBase,
    SuscripcionComercial
} from "./suscripciones";


// Plan básico
export class PlanBasico
extends SuscripcionComercial
implements IStreaming {

    constructor() {
        super("Plan Básico", 5);
    }

    obtenerAcceso(): void {
        console.log("Acceso al contenido básico");
    }

    procesarFactura(): void {
        console.log("Factura procesada: $5");
    }

    reproducir(): void {
        console.log("Streaming en calidad SD");
    }
}


// Plan premiun
export class PlanPremium
extends SuscripcionComercial
implements IStreaming, IDescargas {

    constructor() {
        super("Plan Premium", 15);
    }

    obtenerAcceso(): void {
        console.log("Acceso premium concedido");
    }

    procesarFactura(): void {
        console.log("Factura procesada: $15");
    }

    reproducir(): void {
        console.log("Streaming en HD");
    }

    descargarOffline(): void {
        console.log("Descarga offline disponible");
    }
}


// Plan Enterprise
export class PlanEnterprise
extends SuscripcionComercial
implements
IStreaming,
IDescargas,
ISoporteVIP {

    constructor() {
        super("Plan Enterprise", 30);
    }

    obtenerAcceso(): void {
        console.log("Acceso Enterprise total");
    }

    procesarFactura(): void {
        console.log("Factura procesada: $30");
    }

    reproducir(): void {
        console.log("Streaming en 4K Ultra HD");
    }

    descargarOffline(): void {
        console.log("Contenido descargado");
    }

    llamarAsesor(): void {
        console.log("Conectando con soporte VIP");
    }
}


// Plan estudiantil
export class PlanEstudiantil
extends SuscripcionBase {

    constructor() {
        super("Plan Estudiantil");
    }

    obtenerAcceso(): void {
        console.log(
            "Verificando credenciales UNIVO..."
        );

        console.log(
            "Acceso educativo concedido"
        );
    }
}