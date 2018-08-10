import { Request, Response } from 'express';
import { ControllerRead } from '../common/controller/controller-read.interface';
import { ControllerWrite } from '../common/controller/controller-write.interface';
import { Contact } from './contact.model';
import { contactService } from './contact.service';

const notImplemented = 'Method not implemented.';

class ContactController implements ControllerRead, ControllerWrite {
    getList(req: Request, res: Response): void {
        contactService
            .getList()
            .then((response: Contact[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    getById(req: Request, res: Response): void {
        contactService
            .getById(req.params.id)
            .then((response: Contact | null) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    count(req: Request, res: Response): void {
        contactService
            .count()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    create(req: Request, res: Response): void {
        /* Create contact */
        throw new Error(notImplemented);
    }

    delete(req: Request, res: Response): void {
        /* Delete contact */
        throw new Error(notImplemented);
    }

    update(req: Request, res: Response): void {
        /* Update contact */
        throw new Error(notImplemented);
    }
}

export const contactController = new ContactController();
