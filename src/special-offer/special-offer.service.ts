import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { SpecialOffer } from './special-offer.model';
import { specialOfferRepository } from './special-offer.repository';

const notImplemented = 'Method not implemented.';

class SpecialOfferService implements ServiceRead<SpecialOffer>, ServiceWrite<SpecialOffer> {
    async getList(): Promise<SpecialOffer[]> {
        return await specialOfferRepository.find({});
    }

    async getById(id: string): Promise<SpecialOffer | null> {
        return await specialOfferRepository.findById(id);
    }

    async count(): Promise<number> {
        const specialOffers = await specialOfferRepository.find({});

        return specialOffers.length;
    }

    async create(item: SpecialOffer): Promise<SpecialOffer> {
        return await specialOfferRepository.create(item);
    }

    async delete(id: string): Promise<boolean> {
        return await specialOfferRepository.delete(id);
    }

    async update(item: SpecialOffer): Promise<SpecialOffer> {
        return await specialOfferRepository.update(item);
    }

    async partialUpdate(id: string, item: Partial<SpecialOffer>): Promise<SpecialOffer | null> {
        return await specialOfferRepository.partialUpdate(id, item);
    }
}

export const specialOfferService = new SpecialOfferService();
