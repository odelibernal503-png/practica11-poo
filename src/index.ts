import { usuario } from "./usuario";

import {
    PlanBasico,
    PlanPremium,
    PlanEnterprise,
    PlanEstudiantil
} from "./planes";

import {
    NotificadorWhatsApp,
    NotificadorEmail
} from "./notificaciones";

import { ProcesadorVentas } from "./procesadorVentas";


// USUARIO
const usuario1 = new usuario(
    "Jekssy",
    "odelibernal503@gmail.com"
);


// Planes
const basico = new PlanBasico();
const premium = new PlanPremium();
const enterprise = new PlanEnterprise();
const estudiante = new PlanEstudiantil();


// Cambiar notificador

const notificador = new NotificadorWhatsApp();

// const notificador = new NotificadorEmail();


// Procesador
const procesador = new ProcesadorVentas(
    notificador
);


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