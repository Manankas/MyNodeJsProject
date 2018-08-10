import { Request, Response } from 'express';
import { ControllerRead } from '../common/controller/controller-read.interface';
import { ControllerWrite } from '../common/controller/controller-write.interface';
import { Vehicule } from './vehicule.model';
import { vehiculeService } from './vehicule.service';

const notImplemented = 'Method not implemented.';

class VehiculeController implements ControllerRead, ControllerWrite {
    getList(req: Request, res: Response): void {
        vehiculeService
            .getList()
            .then((response: Vehicule[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    getById(req: Request, res: Response): void {
        vehiculeService
            .getById(req.params.id)
            .then((response: Vehicule | null) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    count(req: Request, res: Response): void {
        vehiculeService
            .count()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    create(req: Request, res: Response): void {
        vehiculeService
            .create(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    delete(req: Request, res: Response): void {
        vehiculeService
            .delete(req.params.id)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    update(req: Request, res: Response): void {
        vehiculeService
            .update(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    partialUpdate(req: Request, res: Response): void {
        vehiculeService
            .partialUpdate(req.params.id, req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    findByName(req: Request, res: Response): void {
        vehiculeService
            .findByName(req.params.name)
            .then((response: Vehicule[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
    findByGammeId(req: Request, res: Response): void {
        vehiculeService
            .findByGammeId(req.params.gammeId)
            .then((response: Vehicule[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
    getListForConfigurator(req: Request, res: Response): void {
        vehiculeService
            .getListForConfigurator()
            .then((response: Object[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
}

export const vehiculeController = new VehiculeController();
