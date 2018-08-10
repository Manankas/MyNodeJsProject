import { BaseRepository } from '../common/repository/base.repository';
import { SpecialOffer } from './special-offer.model';
import { specialOfferSchema } from './special-offer.schema';

class SpecialOfferRepository extends BaseRepository<SpecialOffer> {
    constructor() {
        super(specialOfferSchema);
    }
}

export const specialOfferRepository = new SpecialOfferRepository();
