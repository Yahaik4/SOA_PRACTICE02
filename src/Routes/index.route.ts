import express, { Request, Response } from 'express';
import mailRouter from './mail.route';

const router = express.Router();
router.get('/', (req: Request, res: Response): any => {
    return res.status(200).json({
        message: 'API connected'
    });
});

router.use('/', mailRouter);

export default router;