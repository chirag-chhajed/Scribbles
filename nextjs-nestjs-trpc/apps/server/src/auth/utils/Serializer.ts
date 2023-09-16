import { Inject, Injectable, Logger } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { User } from '@server/typeorm/entities/User';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    private readonly logger = new Logger(SessionSerializer.name);
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super();
    }
    serializeUser(user: User, done: Function) {
        this.logger.debug(`serializeUser: ${JSON.stringify(user, null, 2)}`);
        done(null, user);
    }
    async deserializeUser(payload: any, done: Function) {
        const user = await this.authService.findUser(payload.id);
        this.logger.debug(`deserializeUser: ${JSON.stringify(user, null, 2)}`);
        return user ? done(null, user) : done(null, null);
    }
}
