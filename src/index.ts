import { Express, Request, Response, NextFunction } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import * as server from './Configs/server.config';
import { getEnv } from './Configs/env.config';
import router from './Routes/index.route';

const env = getEnv();

const app: Express = server.init();
app.get('/', (req: Request, res: Response): any => {
    res.render("emailForm", { layout: 'main' });
});

app.use(router);


app.use((req: Request, res: Response, next: NextFunction) => {
    const error = createHttpError(404, 'Page Not Found');
    next(error);
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction): any => {
    return res.status(err.statusCode || 500).json({
        status: 'error',
        message: err.message || 'Internal Server Error',
        stack: err.stack || undefined,
    });
});

app.listen(process.env.PORT, (): void => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
