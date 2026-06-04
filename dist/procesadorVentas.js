"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcesadorVentas = void 0;
class ProcesadorVentas {
    constructor(notificador) {
        this.notificador = notificador;
    }
    procesarPlan(usuario, plan) {
        console.log(`\n[LOG]: Activando ${plan.nombre}`);
        plan.obtenerAcceso();
        this.notificador.enviar(usuario, `Su suscripción ${plan.nombre} está activa`);
    }
}
exports.ProcesadorVentas = ProcesadorVentas;
//# sourceMappingURL=procesadorVentas.js.map