import { Router } from 'express';
import { brochureController } from './brochure.controller';
import * as passport from 'passport';

class BrochureRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(brochureController.getList);
        this.router.route('/:id').get(brochureController.getById);
        this.router
            .route('/')
            .post(brochureController.create);
        this.router
            .route('/:id')
            .delete(passport.authenticate('jwt', { session: false }), brochureController.delete);
    }
}

const brochureRouter = new BrochureRouter();

export const brochureRoutes = brochureRouter.router;
