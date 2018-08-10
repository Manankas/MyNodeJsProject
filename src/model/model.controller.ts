import { Request, Response } from 'express';
import { ControllerRead } from '../common/controller/controller-read.interface';
import { ControllerWrite } from '../common/controller/controller-write.interface';
import { Model } from './model.model';
import { modelService } from './model.service';

const notImplemented = 'Method not implemented.';

class ModelController implements ControllerRead, ControllerWrite {
    getList(req: Request, res: Response): void {
        modelService
            .getList()
            .then((response: Model[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    getById(req: Request, res: Response): void {
        modelService
            .getById(req.params.id)
            .then((response: Model | null) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    count(req: Request, res: Response): void {
        modelService
            .count()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    create(req: Request, res: Response): void {
        modelService
            .create(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    delete(req: Request, res: Response): void {
        modelService
            .delete(req.params.id)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    update(req: Request, res: Response): void {
        modelService
            .update(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    findByName(req: Request, res: Response): void {
        modelService
            .findByName(req.params.name)
            .then((response: Model[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    findByVehiculeId(req: Request, res: Response): void {
        modelService
            .findByVehiculeId(req.params.vehiculeId)
            .then((response: Model[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
    partialUpdate(req: Request, res: Response): void {
        modelService
            .partialUpdate(req.params.id, req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
}

export const modelController = new ModelController();
