import { BaseRepository } from '../common/repository/base.repository';
import { Gamme } from './gamme.model';
import { gammeSchema } from './gamme.schema';

class GammeRepository extends BaseRepository<Gamme> {
    constructor() {
        super(gammeSchema);
    }
}

export const gammeRepository = new GammeRepository();
