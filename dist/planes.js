"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanEstudiantil = exports.PlanEnterprise = exports.PlanPremium = exports.PlanBasico = void 0;
const suscripciones_1 = require("./suscripciones");
// Plan básico
class PlanBasico extends suscripciones_1.SuscripcionComercial {
    constructor() {
        super("Plan Básico", 5);
    }
    obtenerAcceso() {
        console.log("Acceso al contenido básico");
    }
    procesarFactura() {
        console.log("Factura procesada: $5");
    }
    reproducir() {
        console.log("Streaming en calidad SD");
    }
}
exports.PlanBasico = PlanBasico;
// Plan premiun
class PlanPremium extends suscripciones_1.SuscripcionComercial {
    constructor() {
        super("Plan Premium", 15);
    }
    obtenerAcceso() {
        console.log("Acceso premium concedido");
    }
    procesarFactura() {
        console.log("Factura procesada: $15");
    }
    reproducir() {
        console.log("Streaming en HD");
    }
    descargarOffline() {
        console.log("Descarga offline disponible");
    }
}
exports.PlanPremium = PlanPremium;
// Plan Enterprise
class PlanEnterprise extends suscripciones_1.SuscripcionComercial {
    constructor() {
        super("Plan Enterprise", 30);
    }
    obtenerAcceso() {
        console.log("Acceso Enterprise total");
    }
    procesarFactura() {
        console.log("Factura procesada: $30");
    }
    reproducir() {
        console.log("Streaming en 4K Ultra HD");
    }
    descargarOffline() {
        console.log("Contenido descargado");
    }
    llamarAsesor() {
        console.log("Conectando con soporte VIP");
    }
}
exports.PlanEnterprise = PlanEnterprise;
// Plan estudiantil
class PlanEstudiantil extends suscripciones_1.SuscripcionBase {
    constructor() {
        super("Plan Estudiantil");
    }
    obtenerAcceso() {
        console.log("Verificando credenciales UNIVO...");
        console.log("Acceso educativo concedido");
    }
}
exports.PlanEstudiantil = PlanEstudiantil;
//# sourceMappingURL=planes.js.map