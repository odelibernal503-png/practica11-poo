import { INotificacion } from "./interfaces";
import { usuario } from "./usuario";
export declare class NotificadorWhatsApp implements INotificacion {
    enviar(usuario: usuario, mensaje: string): void;
}
export declare class NotificadorEmail implements INotificacion {
    enviar(usuario: usuario, mensaje: string): void;
}
//# sourceMappingURL=notificaciones.d.ts.map