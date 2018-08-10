import { CustomRepository } from '../common/repository/custom.repository';
import { Model } from './model.model';
import { modelSchema } from './model.schema';

class ModelDeleteRepository extends CustomRepository<Model> {
    constructor() {
        super(modelSchema);
    }
}

export const modelDeleteRepository = new ModelDeleteRepository();
