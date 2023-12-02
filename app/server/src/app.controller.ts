import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import * as schema from './drizzle/schema';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        @Inject('DB_DEV') private db: PostgresJsDatabase<typeof schema>,
    ) {}

    @Get()
    getHello(): string {
        function generateRandomString(length: number): string {
            const characters =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(
                    Math.random() * characters.length,
                );
                result += characters.charAt(randomIndex);
            }

            return result;
        }
        this.db
            .insert(schema.user)
            .values({
                name: generateRandomString(10),
                email: generateRandomString(20),
            })
            .then(() => console.log('created'));
        // .catch((err) => console.error(err, 'error'));
        return this.appService.getHello();
    }
}
