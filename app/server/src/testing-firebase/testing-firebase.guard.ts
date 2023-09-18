import {
    CanActivate,
    ExecutionContext,
    Injectable,
    Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TestingFirebaseGuard implements CanActivate {
    private readonly logger = new Logger(TestingFirebaseGuard.name);
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        this.logger.debug(`request:`, request.headers);
        return true;
    }
}
