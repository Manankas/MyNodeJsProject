import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { Gamme } from './gamme.model';
import { gammeRepository } from './gamme.repository';
import { APIResponse } from '../common/api-response';

const notImplemented = 'Method not implemented.';

class GammeService implements ServiceRead<Gamme>, ServiceWrite<Gamme> {
    async getList(): Promise<Gamme[]> {
        return await gammeRepository.findAndSort({}, 'asc');
    }

    async getById(id: string): Promise<Gamme | null> {
        return await gammeRepository.findById(id);
    }

    async count(): Promise<number> {
        const contacts = await gammeRepository.find({});

        return contacts.length;
    }

    async create(item: Gamme): Promise<Gamme> {
        const gamme = await gammeRepository.findBy({ name: item.name });
        if (gamme.length > 0) {
            return Promise.reject({
                error: APIResponse.GAMME_DUPLICATED
            });
        }

        return await gammeRepository.create(item);
    }

    async delete(id: string): Promise<boolean> {
        return await gammeRepository.delete(id);
    }

    async update(item: Gamme): Promise<Gamme> {
        return await gammeRepository.update(item);
    }
}

export const gammeService = new GammeService();
