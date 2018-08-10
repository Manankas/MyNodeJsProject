import { Router } from 'express';
import { contactController } from './contact.controller';

class ContactRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(contactController.getList);
        this.router.route('/count').get(contactController.count);
        this.router.route('/:id').get(contactController.getById);
    }
}

const contactRouter = new ContactRouter();

export const contactRoutes = contactRouter.router;
