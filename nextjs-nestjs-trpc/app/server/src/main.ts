import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from '@server/trpc/trpc.router';
import * as session from 'express-session';
import * as passport from 'passport';
import * as admin from 'firebase-admin';
import { ServiceAccount, cert } from 'firebase-admin/app';
import * as serviceAccountJson from '../doodle-battle-firebase-adminsdk-me0ly-994e13d22b.json';

// const serviceAccount: ServiceAccount = serviceAccountJson;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api');
    app.use(
        session({
            secret: 'PzCqRg4I9P70Rc9njwjWyOoNDMdb/+CFZft44V+FUWU=',
            saveUninitialized: false,
            resave: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
            },
        }),
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.enableCors();
    const trpc = app.get(TrpcRouter);
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                clientEmail: serviceAccountJson.client_email,
                privateKey: serviceAccountJson.private_key,
                projectId: serviceAccountJson.project_id,
            }),
            

        });
        console.log('Firebase admin initialized');
    } catch (error) {
        console.log(error);
    }
    trpc.applyMiddleware(app);
    await app.listen(4000);
}
bootstrap();
