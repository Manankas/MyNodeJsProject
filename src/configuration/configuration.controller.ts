import { Request, Response } from 'express';
import { ControllerRead } from '../common/controller/controller-read.interface';
import { ControllerWrite } from '../common/controller/controller-write.interface';
import { Configuration } from './configuration.model';
import { configurationService } from './configuration.service';

const notImplemented = 'Method not implemented.';

class ConfigurationController implements ControllerRead, ControllerWrite {
    getList(req: Request, res: Response): void {
        configurationService
            .getList()
            .then((response: Configuration[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    getById(req: Request, res: Response): void {
        configurationService
            .getById(req.params.id)
            .then((response: Configuration | null) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    count(req: Request, res: Response): void {
        configurationService
            .count()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    create(req: Request, res: Response): void {
        configurationService
            .create(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    delete(req: Request, res: Response): void {
        configurationService
            .delete(req.params.id)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    update(req: Request, res: Response): void {
        configurationService
            .update(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    findByBorneId(req: Request, res: Response): void {
        configurationService
            .findByBorneId(req.params.borneId)
            .then((response: Configuration[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
    partialUpdate(req: Request, res: Response): void {
        configurationService
            .partialUpdate(req.params.id, req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
}

export const configurationController = new ConfigurationController();
