import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { Configuration } from './configuration.model';
import { configurationRepository } from './configuration.repository';
import { APIResponse } from '../common/api-response';

const notImplemented = 'Method not implemented.';

class ConfigurationService implements ServiceRead<Configuration>, ServiceWrite<Configuration> {
    async getList(): Promise<Configuration[]> {
        return await configurationRepository.find({});
    }

    async getById(id: string): Promise<Configuration | null> {
        return await configurationRepository.findById(id);
    }

    async count(): Promise<number> {
        const configurations = await configurationRepository.find({});

        return configurations.length;
    }

    async create(item: Configuration): Promise<Configuration> {
        const configuration = await configurationRepository.findBy({
            $and: [
                { borne_id: item.borneId },
                { vehiculeName: item.vehiculeName },
                { vehiculeModel: item.vehiculeModel }
            ]
        });

        if (configuration.length > 0) {
            return Promise.reject({
                error: APIResponse.ADD_CONFIG_ERROR_DOUBLON
            });
        }

        return await configurationRepository.create(item);
    }

    async delete(id: string): Promise<boolean> {
        return await configurationRepository.delete(id);
    }

    async update(item: Configuration): Promise<Configuration> {
        return await configurationRepository.update(item);
    }
    async findByBorneId(id: string): Promise<Configuration[]> {
        return await configurationRepository.find({ borneId: id });
    }
    async partialUpdate(id: string, item: Partial<Configuration>): Promise<Configuration | null> {
        return await configurationRepository.partialUpdate(id, item);
    }
}

export const configurationService = new ConfigurationService();
