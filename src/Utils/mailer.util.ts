import { createTransport, SendMailOptions } from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';
import SMTPConnection from 'nodemailer/lib/smtp-connection';

dotenv.config();

const oAth2Client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URI);
oAth2Client.setCredentials({ refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN ?? null });

const createTransporter = async () => {
    const accessToken = await oAth2Client.getAccessToken();
    return createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.ADMIN_EMAIL_ADDRESS,
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
            accessToken,
        } as SMTPConnection.AuthenticationTypeOAuth2,
    });
}

export const sendMail = async (options: SendMailOptions) => {
    const transporter = await createTransporter();
    return transporter.sendMail(options);
}