import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { Model } from './model.model';
import { modelRepository } from './model.repository';
import { vehiculeRepository } from '../vehicule/vehicule.repository';
import { APIResponse } from '../common/api-response';

const notImplemented = 'Method not implemented.';

class ModelService implements ServiceRead<Model>, ServiceWrite<Model> {
    async getList(): Promise<Model[]> {
        return await modelRepository.find({});
    }

    async getById(id: string): Promise<Model | null> {
        const model = await modelRepository.findById(id);

        if (model !== null) {
            const vehicule = await vehiculeRepository.findById(model.vehiculeId);
            model.vehicule = vehicule;
        }

        return model;
    }

    async count(): Promise<number> {
        const models = await modelRepository.find({});

        return models.length;
    }

    async create(item: Model): Promise<Model> {
        const vehicule = await vehiculeRepository.findById(item.vehiculeId);
        if (!vehicule) {
            return Promise.reject({
                error: APIResponse.CATEGORIE_NOT_FOUND
            });
        }

        return await modelRepository.create(item);
    }

    async delete(id: string): Promise<boolean> {
        return await modelRepository.delete(id);
    }

    async update(item: Model): Promise<Model> {
        return await modelRepository.update(item);
    }
    async findByName(modelName: string): Promise<Model[]> {
        return await modelRepository.find({ name: modelName });
    }
    async findByVehiculeId(vehId: string): Promise<Model[]> {
        return await modelRepository.find({ vehiculeId: vehId });
    }
    async partialUpdate(id: string, item: Partial<Model>): Promise<Model | null> {
        return await modelRepository.partialUpdate(id, item);
    }
}

export const modelService = new ModelService();
