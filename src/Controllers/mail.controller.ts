import { Request, Response, NextFunction, text, Send } from 'express';
import { sendMail } from '../Utils/mailer.util';
import { SendMailOptions } from 'nodemailer';
import { ServiceEmail } from '../Utils/serviceTemplate.util';

class MailController {
    // Implementation of mail controller
    static async sendMail(req: Request, res: Response, next: NextFunction) {
        const to = req.body.to;
        const subject = req.body.subject;
        const message = req.body.message;
        try {
            await sendMail({
                from: process.env.ADMIN_EMAIL_ADDRESS,
                to,
                subject,
                text: message,
            });
            res.redirect("/result?status=success");
        } catch (error) {
            res.redirect("/result?status=error");
        }
    }

    static async services(req: Request, res: Response, next: NextFunction) {
        const to = req.body.to;
        const subject = req.body.subject;
        const message = req.body.message;
        try {
            const mailOPtion: SendMailOptions = {
                from: process.env.ADMIN_EMAIL_ADDRESS,
                to,
                subject,
                text: message,
                html: ServiceEmail(),
            };

            const result = await sendMail(mailOPtion);

            if(!result) {
                return res.status(500).json({ message: 'Failed to send email' });
            }
            res.redirect("/result?status=success");
        } catch (error) {
            res.redirect("/result?status=error");
        }
    }
}

export default MailController;