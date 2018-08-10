import { Router } from 'express';
import * as passport from 'passport';

import { contactRoutes } from '../contact/contact.routes';
import { userRoutes } from '../user/user.routes';
import { authenticationRoutes } from '../authentication/authentication.routes';
import { vehiculeRoutes } from '../vehicule/vehicule.routes';
import { configurationRoutes } from '../configuration/configuration.routes';
import { modelRoutes } from '../model/model.routes';
import { uploadRoutes } from '../upload/upload.routes';
import { brochureRoutes } from '../brochure/brochure.routes';
import { gammeRoutes } from '../gamme/gamme.routes';
import { specialOfferRoutes } from '../special-offer/special-offer.routes';

class AppRouter {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/api-status', (req, res) => res.json({ status: 'API is OK' }));
        this.router.use('/authentication', authenticationRoutes);
        this.router.use(
            '/contact',
            passport.authenticate('jwt', { session: false }),
            contactRoutes
        );
        this.router.use('/user', userRoutes);
        this.router.use('/vehicule', vehiculeRoutes);
        this.router.use('/configuration', configurationRoutes);
        this.router.use('/_model', modelRoutes);
        this.router.use('/upload', uploadRoutes);
        this.router.use('/brochure', brochureRoutes);
        this.router.use('/gamme', gammeRoutes);
        this.router.use('/special-offer', specialOfferRoutes);
    }
}

const appRouter = new AppRouter();
export const appRoutes = appRouter.router;
