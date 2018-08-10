import * as qr from 'qr-image';
import * as fs from 'fs';
import * as appRoot from 'app-root-path';
import * as env from 'env-var';
class UploadService {
    async uploadBrochure(brochureFileName: string): Promise<string> {
        // write URL of brochure PDF in QR code
        const qrPng = qr.image(
            `${env
                .get('SERVER_URL')
                .required()
                .asString()}/brochures/${brochureFileName}.pdf`,
            {
                type: 'png'
            }
        );

        // create image
        await qrPng.pipe(fs.createWriteStream(`${appRoot}/medias/qrcode/${brochureFileName}.png`));

        // Qrcode link
        return `${env
            .get('SERVER_URL')
            .required()
            .asString()}/qrcode/${brochureFileName}.png`;
    }
}

export const uploadService = new UploadService();
