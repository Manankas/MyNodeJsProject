import { Router } from 'express';
import { modelController } from './model.controller';
import * as passport from 'passport';

class ModelRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(modelController.getList);
        this.router.route('/count').get(modelController.count);
        this.router.route('/:id').get(modelController.getById);
        this.router
            .route('/')
            .post(passport.authenticate('jwt', { session: false }), modelController.create);
        this.router
            .route('/')
            .put(passport.authenticate('jwt', { session: false }), modelController.update);
        this.router
            .route('/:id')
            .delete(passport.authenticate('jwt', { session: false }), modelController.delete);
        this.router.route('/findByName/:name').get(modelController.findByName);
        this.router.route('/findByVehiculeId/:vehiculeId').get(modelController.findByVehiculeId);
        this.router
            .route('/:id')
            .patch(passport.authenticate('jwt', { session: false }), modelController.partialUpdate);
    }
}

const modelRouter = new ModelRouter();

export const modelRoutes = modelRouter.router;
