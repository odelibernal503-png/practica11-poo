import { INotificacion } from "./interfaces";
import { usuario } from "./usuario";
import { SuscripcionBase } from "./suscripciones";

export class ProcesadorVentas {

    constructor(
        private notificador: INotificacion
    ) {}

    procesarPlan(
        usuario: usuario,
        plan: SuscripcionBase
    ): void {

        console.log(
            `\n[LOG]: Activando ${plan.nombre}`
        );

        plan.obtenerAcceso();

        this.notificador.enviar(
            usuario,
            `Su suscripción ${plan.nombre} está activa`
        );
    }
}