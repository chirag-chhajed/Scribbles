import type { Config } from 'drizzle-kit';

export default {
    schema: './src/drizzle/schema.ts',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        connectionString:
            'postgres://postgres:94justchat@localhost:5432/doodle_battle',
    },
} satisfies Config;
