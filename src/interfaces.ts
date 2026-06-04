//Streaming
export interface IStreaming {
    reproducir(): void;
}

//Descargas
export interface IDescargas {
    descargarOffline(): void;  
}

//soporte VIP 
export interface ISoporteVIP{
    llamarAsesor(): void;
}

//Notificaciones
export interface INotificacion {
    enviar(usuario: any, mensaje: string): void;
}