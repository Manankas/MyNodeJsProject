import { Request, Response } from 'express';
import { uploadService } from './upload.service';
class UploadController {
    add(req: Request, res: Response): void {
        res.status(200).json({ message: 'sucess' });
    }
    addBrochure(req: Request, res: Response): void {
        uploadService
            .uploadBrochure(req.body.brochureFileName)
            .then(response => res.status(200).json({ qrcodeUrl: response }))
            .catch(err => res.status(500).json(err));
    }
}

export const uploadController = new UploadController();
