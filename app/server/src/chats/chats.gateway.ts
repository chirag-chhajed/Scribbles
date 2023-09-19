import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WebSocketServer,
} from '@nestjs/websockets';
import { ChatsService } from './chats.service';
import { Server, Socket } from 'socket.io';
import { Logger, OnModuleInit } from '@nestjs/common';

@WebSocketGateway({ namespace: 'chats' })
export class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(private readonly chatsService: ChatsService) {}
    private readonly logger = new Logger(ChatsGateway.name);

    @WebSocketServer()
    private readonly server: Server;

    handleConnection(client: Socket) {
        this.logger.debug(`Client ${client.id} connected`);
        // You can perform any logic related to client connection here
    }

    // This method is called when a client disconnects from the WebSocket
    handleDisconnect(client: Socket) {
        this.logger.debug(`Client ${client.id} disconnected`);
    }

    @SubscribeMessage('chatMessage') // Use a custom message type, e.g., 'chatMessage'
    handleChatMessage(
        @MessageBody() message: string,
        @ConnectedSocket() client: Socket,
    ) {
        this.logger.debug(
            `Received message from client ${client.id}: ${message}`,
        );
        // sends the message to all the people except the sender
        // client.broadcast.emit('chatMessage', message);
        // sends the message to all the people including the sender
        this.server.emit('chatMessage', message);
    }
}
