import { Router } from 'express';
import { specialOfferController } from './special-offer.controller';
import * as passport from 'passport';

class SpecialOfferRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(specialOfferController.getList);
        this.router.route('/:id').get(specialOfferController.getById);
        this.router
            .route('/')
            .post(passport.authenticate('jwt', { session: false }), specialOfferController.create);
        this.router
            .route('/')
            .put(passport.authenticate('jwt', { session: false }), specialOfferController.update);
        this.router
            .route('/:id')
            .delete(
                passport.authenticate('jwt', { session: false }),
                specialOfferController.delete
            );
        this.router
            .route('/:id')
            .patch(passport.authenticate('jwt', { session: false }), specialOfferController.partialUpdate);
    }
}

const specialOfferRouter = new SpecialOfferRouter();

export const specialOfferRoutes = specialOfferRouter.router;
