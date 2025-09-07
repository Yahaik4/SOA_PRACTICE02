import express from 'express';
import MailController from '../Controllers/mail.controller';

const router = express.Router();

router.post('/sendContent', MailController.sendMail);
router.post('/sendServiceHTML', MailController.services);
router.get('/result', (req, res) => {
    const status = req.query.status;

    if (status === 'success') {
        res.render("result", { 
            layout: 'main',
            success: true,
            message: "Send mail successfully"
        });
    } else {
        res.render("result", { 
            layout: 'main',
            success: false,
            message: "Send mail failed"
        });
    }
});


export default router;