import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../..', '.env') });


interface ENV {
    PORT: number | undefined;
    SECRET_KEY: string | undefined;
    SERVER_URL: string | undefined;
    CLIENT_URL: string | undefined;
    GOOGLE_CLIENT_ID: string | undefined;
    GOOGLE_CLIENT_SECRET: string | undefined;
    GOOGLE_MAILER_REFRESH_TOKEN: string | undefined;
    ADMIN_EMAIL_ADDRESS: string | undefined;
}

interface EnvConfig{
    PORT: number;
    SECRET_KEY: string;
    SERVER_URL: string;
    CLIENT_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_MAILER_REFRESH_TOKEN: string;
    ADMIN_EMAIL_ADDRESS: string;

}

export const getEnv = (): ENV => {
    return {
        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
        SECRET_KEY: process.env.SECRET_KEY,
        SERVER_URL: process.env.SERVER_URL,
        CLIENT_URL: process.env.CLIENT_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_MAILER_REFRESH_TOKEN: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
        ADMIN_EMAIL_ADDRESS: process.env.ADMIN_EMAIL_ADDRESS,
    };
};

