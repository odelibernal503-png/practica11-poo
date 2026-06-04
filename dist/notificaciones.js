"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorEmail = exports.NotificadorWhatsApp = void 0;
// WhatsApp
class NotificadorWhatsApp {
    enviar(usuario, mensaje) {
        console.log(`WhatsApp para ${usuario.nombre}: ${mensaje}`);
    }
}
exports.NotificadorWhatsApp = NotificadorWhatsApp;
// Email
class NotificadorEmail {
    enviar(usuario, mensaje) {
        console.log(`Email para ${usuario.nombre}: ${mensaje}`);
    }
}
exports.NotificadorEmail = NotificadorEmail;
//# sourceMappingURL=notificaciones.js.map