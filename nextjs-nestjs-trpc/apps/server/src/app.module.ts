import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from '@server/trpc/trpc.module';
import { ConfigModule } from '@nestjs/config';
import * as firebaseConfig from '../doodle-battle-firebase-adminsdk-me0ly-994e13d22b.json';
import { FirebaseModule } from 'nestjs-firebase';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { TestingFirebaseController } from './testing-firebase/testing-firebase.controller';
// import * as path from 'path';
@Module({
    imports: [
        TrpcModule,
        AuthModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '94justchaT.',
            database: 'doodle_battle',
            entities: [User],
            synchronize: true,
        }),
        FirebaseModule.forRoot({
            googleApplicationCredential: {
                clientEmail: firebaseConfig.client_email,
                privateKey: firebaseConfig.private_key,
                projectId: firebaseConfig.project_id,
            },
        }),
    ],
    controllers: [AppController, TestingFirebaseController],
    providers: [AppService],
})
export class AppModule {}
