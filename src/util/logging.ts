import winston from 'winston';
import 'winston-mongodb';
import { MONGODB_URI } from '../util/secrets';

const mongoUrl: any = MONGODB_URI;

const options: winston.LoggerOptions = {
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'logfile.log', level: 'info' }),
        new winston.transports.MongoDB({db: mongoUrl, level: 'info'}),
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.prettyPrint()
            )
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
    ],
    exitOnError: false
}

const logger = winston.createLogger(options);

export default logger;