import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { Vehicule } from './vehicule.model';
import { vehiculeRepository } from './vehicule.repository';
import { modelRepository } from '../model/model.repository';
import { gammeRepository } from '../gamme/gamme.repository';
import { APIResponse } from '../common/api-response';
import { modelDeleteRepository } from '../model/model.delete.repository';
import { Gamme } from '../gamme/gamme.model';

const notImplemented = 'Method not implemented.';

class VehiculeService implements ServiceRead<Vehicule>, ServiceWrite<Vehicule> {
    async getList(): Promise<Vehicule[]> {
        const vehicles = await vehiculeRepository.find({});
        for (const vehicle of vehicles) {
            const gamme = await gammeRepository.findById(vehicle.gammeId);
            vehicle.gammeName = (gamme && gamme.name) || '';
        }

        return vehicles;
    }

    async getListForConfigurator(): Promise<Object[]> {
        const globalData: Object[] = [];
        const fullcategorie = {
            vehiculeInfo: {},
            modelInfo: {}
        };
        const vehicules: Vehicule[] = await vehiculeRepository.find({});
        for (const vehicule of vehicules) {
            const model = await modelRepository.find({ vehiculeId: vehicule._id });

            fullcategorie.vehiculeInfo = vehicule;
            fullcategorie.modelInfo = model;

            await globalData.push(fullcategorie);
        }

        return globalData;
    }

    async getById(id: string): Promise<Vehicule | null> {
        return await vehiculeRepository.findById(id);
    }

    async count(): Promise<number> {
        const models = await vehiculeRepository.find({});

        return models.length;
    }

    async create(item: Vehicule): Promise<Vehicule> {
        const gamme = await gammeRepository.findById(item.gammeId);
        if (!gamme) {
            return Promise.reject({
                error: APIResponse.GAMME_NOT_FOUND
            });
        }

        return await vehiculeRepository.create(item);
    }

    async delete(id: string): Promise<boolean> {
        const allDeleted = await modelDeleteRepository.deleteBy({ categoryId: id });
        if (allDeleted) {
            return await vehiculeRepository.delete(id);
        } else {
            return allDeleted;
        }
    }

    async update(item: Vehicule): Promise<Vehicule> {
        return await vehiculeRepository.update(item);
    }
    async findByName(catName: string): Promise<Vehicule[]> {
        return await vehiculeRepository.find({ name: catName });
    }

    async findByGammeId(gamme: string): Promise<Vehicule[]> {
        return await vehiculeRepository.find({ gammeId: gamme });
    }

    async partialUpdate(id: string, item: Partial<Vehicule>): Promise<Vehicule | null> {
        return await vehiculeRepository.partialUpdate(id, item);
    }
}

export const vehiculeService = new VehiculeService();
