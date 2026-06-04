"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./usuario");
const planes_1 = require("./planes");
const notificaciones_1 = require("./notificaciones");
const procesadorVentas_1 = require("./procesadorVentas");
// USUARIO
const usuario1 = new usuario_1.usuario("Josue", "josue@gmail.com");
// Planes
const basico = new planes_1.PlanBasico();
const premium = new planes_1.PlanPremium();
const enterprise = new planes_1.PlanEnterprise();
const estudiante = new planes_1.PlanEstudiantil();
// Cambiar notificador
const notificador = new notificaciones_1.NotificadorWhatsApp();
// const notificador = new NotificadorEmail();
// Procesador
const procesador = new procesadorVentas_1.ProcesadorVentas(notificador);
// Pruebas
procesador.procesarPlan(usuario1, basico);
basico.reproducir();
console.log("\n----------------");
procesador.procesarPlan(usuario1, premium);
premium.reproducir();
premium.descargarOffline();
console.log("\n----------------");
procesador.procesarPlan(usuario1, enterprise);
enterprise.reproducir();
enterprise.descargarOffline();
enterprise.llamarAsesor();
console.log("\n----------------");
// Plan estudiantil
procesador.procesarPlan(usuario1, estudiante);
//# sourceMappingURL=index.js.map