import { Router, Request, Response, NextFunction } from 'express';
import { uploadController } from './upload.controller';
import * as uploadConfig from './upload.config';
import * as passport from 'passport';
import { logger } from '../app/app.logger';

class UploadRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        const uploadVisual = uploadConfig.uploadVisual.single('visual');
        this.router.route('/visual').post(
            passport.authenticate('jwt', { session: false }),
            uploadConfig.uploadVisual.single('visual'),
            (err: any, req: Request, res: Response, next: NextFunction) => {
                console.log(err);
                logger.error(`Error on uploading visual: ${err.stack}`);
                next();
            },
            uploadController.add
        );
        this.router
            .route('/qrcode')
            .post(
                passport.authenticate('jwt', { session: false }),
                uploadConfig.uploadQrCode.single('qrcode'),
                uploadController.add
            );
        this.router
            .route('/videos')
            .post(
                passport.authenticate('jwt', { session: false }),
                uploadConfig.uploadVideos.array('videos', 12),
                uploadController.add
            );
        this.router.route('/brochures').post(
            (err: any, req: Request, res: Response, next: NextFunction) => {
                logger.error(`Error on uploading file: ${err.stack}`);
                next();
            },
            uploadConfig.uploadBrochures.single('brochure'),
            uploadController.addBrochure
        );
    }
}

const uploadRouter = new UploadRouter();

export const uploadRoutes = uploadRouter.router;
