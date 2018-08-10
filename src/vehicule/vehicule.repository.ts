import { BaseRepository } from '../common/repository/base.repository';
import { Vehicule } from './vehicule.model';
import { vehiculeSchema } from './vehicule.schema';

class VehiculeRepository extends BaseRepository<Vehicule> {
    constructor() {
        super(vehiculeSchema);
    }
}

export const vehiculeRepository = new VehiculeRepository();
