import * as appRoot from 'app-root-path';
import * as winston from 'winston';

export const logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: `${appRoot}/logs/infos.log`,
            handleExceptions: true,
            json: false,
            maxsize: 5242880, // 5MB
            maxFiles: 50,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: `${appRoot}/logs/exceptions.log`, json: false })
    ],
    exitOnError: false // do not exit on handled exceptions
});

class MorganStream {
    write(text: string) {
        logger.info(text.trim());
    }
}

export const morganStream = new MorganStream();
