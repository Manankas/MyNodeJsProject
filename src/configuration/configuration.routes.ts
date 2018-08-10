import { Router } from 'express';
import { configurationController } from './configuration.controller';
import * as passport from 'passport';

class ConfigurationRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(configurationController.getList);
        this.router.route('/count').get(configurationController.count);
        this.router.route('/:id').get(configurationController.getById);
        this.router
            .route('/')
            .post(passport.authenticate('jwt', { session: false }), configurationController.create);
        this.router
            .route('/')
            .put(passport.authenticate('jwt', { session: false }), configurationController.update);
        this.router
            .route('/:id')
            .delete(
                passport.authenticate('jwt', { session: false }),
                configurationController.delete
            );
        this.router.route('/getByBorneId/:borneId').get(configurationController.findByBorneId);
        this.router
            .route('/:id')
            .patch(
                passport.authenticate('jwt', { session: false }),
                configurationController.partialUpdate
            );
    }
}

const configurationRouter = new ConfigurationRouter();

export const configurationRoutes = configurationRouter.router;
