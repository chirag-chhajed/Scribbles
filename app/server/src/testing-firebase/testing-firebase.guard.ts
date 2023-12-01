import {
    CanActivate,
    ExecutionContext,
    Injectable,
    Logger,
    UnauthorizedException,
} from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
@Injectable()
export class TestingFirebaseGuard implements CanActivate {
    private readonly logger = new Logger(TestingFirebaseGuard.name);

    constructor(
        @InjectFirebaseAdmin() private readonly firebaseAdmin: FirebaseAdmin,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers;
        const token = authHeader.authorization.split(' ')[1];

        // this.logger.debug(`request:`, token);

        try {
            const decodedToken = await this.firebaseAdmin.auth.verifyIdToken(
                token,
            );

            const uid = decodedToken.uid;
            this.logger.debug(`uid:`, uid);
            return true; // User is authenticated
        } catch (error) {
            // Handle errors here, including unauthorized exceptions
            // this.logger.error(`Authentication error:`, error);
            throw new UnauthorizedException();
        }
    }
}
