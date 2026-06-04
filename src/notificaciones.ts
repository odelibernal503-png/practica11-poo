import { INotificacion } from "./interfaces";
import { usuario } from "./usuario";


// WhatsApp
export class NotificadorWhatsApp
implements INotificacion {

    enviar(
        usuario: usuario,
        mensaje: string
    ): void {

        console.log(
            `WhatsApp para ${usuario.nombre}: ${mensaje}`
        );
    }
}


// Email
export class NotificadorEmail
implements INotificacion {

    enviar(
        usuario: usuario,
        mensaje: string
    ): void {

        console.log(
            `Email para ${usuario.nombre}: ${mensaje}`
        );
    }
}