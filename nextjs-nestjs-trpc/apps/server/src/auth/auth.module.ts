import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './utils/Serializer';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule.register({ session: true }),
    ],
    controllers: [AuthController],
    providers: [
        GoogleStrategy,
        {
            provide: 'AUTH_SERVICE',
            useClass: AuthService,
        },
        SessionSerializer,
    ],
})
export class AuthModule {}
