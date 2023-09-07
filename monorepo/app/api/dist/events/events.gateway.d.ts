import { Server } from 'socket.io';
export declare class EventsGateway {
    server: Server;
    handleMessage(client: any, payload: any): string;
    sendMessage(): void;
}
