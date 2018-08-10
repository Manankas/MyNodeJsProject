import { Request, Response } from 'express';

import { ControllerRead } from '../common/controller/controller-read.interface';
import { ControllerWrite } from '../common/controller/controller-write.interface';
import { Gamme } from './gamme.model';
import { gammeService } from './gamme.service';

const notImplemented = 'Method not implemented.';

class GammeController implements ControllerRead, ControllerWrite {
    getList(req: Request, res: Response): void {
        gammeService
            .getList()
            .then((response: Gamme[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    getById(req: Request, res: Response): void {
        gammeService
            .getById(req.params.id)
            .then((response: Gamme | null) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    count(req: Request, res: Response): void {
        gammeService
            .count()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    create(req: Request, res: Response): void {
        gammeService
            .create(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    delete(req: Request, res: Response): void {
        gammeService
            .delete(req.params.id)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    update(req: Request, res: Response): void {
        gammeService
            .update(req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
}

export const gammeController = new GammeController();
