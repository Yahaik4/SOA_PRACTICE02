import express, { Express } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';

const init = (): Express => {
    const app: Express = express();

    app.engine('hbs', engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../Views'));

    app.use(morgan('dev'));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    return app;
}

export { init };