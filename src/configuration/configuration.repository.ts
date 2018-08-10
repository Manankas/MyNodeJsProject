import { BaseRepository } from '../common/repository/base.repository';
import { Configuration } from './configuration.model';
import { configurationSchema } from './configuration.schema';

class ConfigurationRepository extends BaseRepository<Configuration> {
    constructor() {
        super(configurationSchema);
    }
}

export const configurationRepository = new ConfigurationRepository();
