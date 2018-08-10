import { Router } from 'express';
import { gammeController } from './gamme.controller';
import * as passport from 'passport';

class GammeRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(gammeController.getList);
        this.router.route('/:id').get(gammeController.getById);
        this.router
            .route('/')
            .post(passport.authenticate('jwt', { session: false }), gammeController.create);
        this.router
            .route('/')
            .put(passport.authenticate('jwt', { session: false }), gammeController.update);
        this.router
            .route('/:id')
            .delete(passport.authenticate('jwt', { session: false }), gammeController.delete);
    }
}

const gammeRouter = new GammeRouter();

export const gammeRoutes = gammeRouter.router;
