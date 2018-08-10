import { BaseRepository } from '../common/repository/base.repository';
import { Model } from './model.model';
import { modelSchema } from './model.schema';

class ModelRepository extends BaseRepository<Model> {
    constructor() {
        super(modelSchema);
    }
}

export const modelRepository = new ModelRepository();
