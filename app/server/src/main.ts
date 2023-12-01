import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// const serviceAccount: ServiceAccount = serviceAccountJson;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix('/api');
    app.enableCors();
    await app.listen(4000);
}
bootstrap();
