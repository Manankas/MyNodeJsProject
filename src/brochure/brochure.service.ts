import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { Brochure } from './brochure.model';
import { brochureRepository } from './brochure.repository';
import * as nodemailer from 'nodemailer';
import { APIText } from '../common/api-text';
import * as ejs from 'ejs';
import * as appRoot from 'app-root-path';
import { logger } from '../app/app.logger';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'opel@mirane.com',
        pass: 'Av4#!fV443'
    },
    tls: { rejectUnauthorized: false }
});

const notImplemented = 'Method not implemented.';

class BrochureService implements ServiceRead<Brochure>, ServiceWrite<Brochure> {
    async getList(): Promise<Brochure[]> {
        return await brochureRepository.find({});
    }

    async getById(id: string): Promise<Brochure | null> {
        return await brochureRepository.findById(id);
    }

    async count(): Promise<number> {
        const models = await brochureRepository.find({});

        return models.length;
    }

    async create(item: Brochure): Promise<Brochure> {
        item.date = new Date();

        const brochure = await brochureRepository.create(item);

        if (brochure) {
            return await this.sendMail(brochure);
        }

        return Promise.reject({ erreur: 'error on recording' });
    }

    private setMainOption(brochure: Brochure, data: string | undefined | {}): Object {
        return {
            from: 'opel@mirane.com',
            to: brochure.email,
            subject: `Catalogue ${brochure.brochureName} - Opel`,
            html: data,
            attachments: [
                {
                    filename: `${brochure.brochureFile}`,
                    path: `${APIText.BROCHURES_PATH}${brochure.brochureFile}`
                },
                {
                    filename: 'logo.png',
                    path: `${APIText.EMAIL_IMG_PATH}logo.png`,
                    cid: 'logoId'
                },
                {
                    filename: 'bg-titre.png',
                    path: `${APIText.EMAIL_IMG_PATH}bg-titre.png`,
                    cid: 'bg-titreId'
                },
                {
                    filename: 'piece-jointe.png',
                    path: `${APIText.EMAIL_IMG_PATH}piece-jointe.png`,
                    cid: 'piece-jointeId'
                }
            ]
        };
    }

    private async sendMail(brochure: Brochure): Promise<Brochure> {
        const formatedMail = await this.renderMail(`${appRoot}/public/email.ejs`, {
            brochureName: brochure.brochureName
        });

        return this.sendMailByTransporter(brochure, formatedMail);
    }

    private sendMailByTransporter(brochure: Brochure, formatedMail: object): Promise<Brochure> {
        return new Promise((resolve, reject) => {
            const mainOptions = this.setMainOption(brochure, formatedMail);
            transporter.sendMail(mainOptions, (error, info) => {
                if (error) {
                    logger.error(error.message);
                    brochureRepository.delete(brochure._id);
                    reject({ error });
                } else {
                    logger.info(`Message sent: ${info.response}`);
                    resolve(brochure);
                }
            });
        });
    }

    private renderMail(template: string, variable: object) {
        return new Promise((resolve, reject) => {
            ejs.renderFile(template, variable, (err, data) => {
                if (err) {
                    logger.error(err.message);
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    async delete(id: string): Promise<boolean> {
        return await brochureRepository.delete(id);
    }

    async update(item: Brochure): Promise<Brochure> {
        return await brochureRepository.update(item);
    }
}

export const brochureService = new BrochureService();
