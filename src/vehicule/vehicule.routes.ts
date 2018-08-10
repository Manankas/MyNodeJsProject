import { Router } from 'express';
import { vehiculeController } from './vehicule.controller';
import * as passport from 'passport';

class VehiculeRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(vehiculeController.getList);
        this.router.route('/count').get(vehiculeController.count);
        this.router.route('/listForConfigurator').get(vehiculeController.getListForConfigurator);
        this.router.route('/:id').get(vehiculeController.getById);
        this.router
            .route('/')
            .post(passport.authenticate('jwt', { session: false }), vehiculeController.create);
        this.router
            .route('/')
            .put(passport.authenticate('jwt', { session: false }), vehiculeController.update);
        this.router
            .route('/:id')
            .patch(
                passport.authenticate('jwt', { session: false }),
                vehiculeController.partialUpdate
            );
        this.router
            .route('/:id')
            .delete(passport.authenticate('jwt', { session: false }), vehiculeController.delete);
        this.router.route('/findByName/:name').get(vehiculeController.findByName);
        this.router.route('/findByGammeId/:gammeId').get(vehiculeController.findByGammeId);
    }
}

const vehiculeRouter = new VehiculeRouter();

export const vehiculeRoutes = vehiculeRouter.router;
