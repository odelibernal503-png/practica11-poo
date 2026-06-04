import { INotificacion } from "./interfaces";
import { usuario } from "./usuario";
import { SuscripcionBase } from "./suscripciones";
export declare class ProcesadorVentas {
    private notificador;
    constructor(notificador: INotificacion);
    procesarPlan(usuario: usuario, plan: SuscripcionBase): void;
}
//# sourceMappingURL=procesadorVentas.d.ts.map