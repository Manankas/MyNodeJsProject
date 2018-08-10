import { BaseRepository } from '../common/repository/base.repository';
import { Brochure } from './brochure.model';
import { brochureSchema } from './brochure.schema';

class BrochureRepository extends BaseRepository<Brochure> {
    constructor() {
        super(brochureSchema);
    }
}

export const brochureRepository = new BrochureRepository();
