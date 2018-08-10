import { Request, Response } from 'express';

import { ControllerRead } from '../common/controller/controller-read.interface';
import { ControllerWrite } from '../common/controller/controller-write.interface';
import { SpecialOffer } from './special-offer.model';
import { specialOfferService } from './special-offer.service';

const notImplemented = 'Method not implemented.';

class SpecialOfferController implements ControllerRead, ControllerWrite {
    getList(req: Request, res: Response): void {
        specialOfferService
            .getList()
            .then((response: SpecialOffer[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    getById(req: Request, res: Response): void {
        specialOfferService
            .getById(req.params.id)
            .then((response: SpecialOffer | null) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    count(req: Request, res: Response): void {
        specialOfferService
            .count()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    create(req: Request, res: Response): void {
        specialOfferService
            .create(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    delete(req: Request, res: Response): void {
        specialOfferService
            .delete(req.params.id)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    update(req: Request, res: Response): void {
        specialOfferService
            .update(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    partialUpdate(req: Request, res: Response): void {
        specialOfferService
            .partialUpdate(req.params.id, req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
}

export const specialOfferController = new SpecialOfferController();
