import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule } from '@nestjs/config';
import * as firebaseConfig from '../doodle-battle-firebase-adminsdk-me0ly-994e13d22b.json';
import { FirebaseModule } from 'nestjs-firebase';
import { TestingFirebaseController } from './testing-firebase/testing-firebase.controller';
import { TestingFirebaseGuard } from './testing-firebase/testing-firebase.guard';
import { LoggerMiddleware } from '@/logger/logger.middleware';
import { ChatsModule } from '@/chats/chats.module';
import { DrizzleBetterSQLiteModule } from '@knaadh/nestjs-drizzle-better-sqlite3';
import * as schema from './drizzle/schema';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
// import * as path from 'path';
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        FirebaseModule.forRoot({
            googleApplicationCredential: {
                clientEmail: firebaseConfig.client_email,
                privateKey: firebaseConfig.private_key,
                projectId: firebaseConfig.project_id,
            },
        }),
        ChatsModule,
        DrizzlePostgresModule.register({
            tag: 'DB_DEV',
            postgres: {
                url: 'postgres://postgres:94justchat@localhost:5432/doodle_battle',
            },
        }),
    ],
    controllers: [AppController, TestingFirebaseController],
    providers: [AppService, TestingFirebaseGuard],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
