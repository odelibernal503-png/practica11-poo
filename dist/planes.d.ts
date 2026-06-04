import { IStreaming, IDescargas, ISoporteVIP } from "./interfaces";
import { SuscripcionBase, SuscripcionComercial } from "./suscripciones";
export declare class PlanBasico extends SuscripcionComercial implements IStreaming {
    constructor();
    obtenerAcceso(): void;
    procesarFactura(): void;
    reproducir(): void;
}
export declare class PlanPremium extends SuscripcionComercial implements IStreaming, IDescargas {
    constructor();
    obtenerAcceso(): void;
    procesarFactura(): void;
    reproducir(): void;
    descargarOffline(): void;
}
export declare class PlanEnterprise extends SuscripcionComercial implements IStreaming, IDescargas, ISoporteVIP {
    constructor();
    obtenerAcceso(): void;
    procesarFactura(): void;
    reproducir(): void;
    descargarOffline(): void;
    llamarAsesor(): void;
}
export declare class PlanEstudiantil extends SuscripcionBase {
    constructor();
    obtenerAcceso(): void;
}
//# sourceMappingURL=planes.d.ts.map