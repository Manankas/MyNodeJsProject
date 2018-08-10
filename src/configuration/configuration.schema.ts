import * as mongoose from 'mongoose';
import { Configuration } from './configuration.model';

const schema = new mongoose.Schema({
    borneId: {
        type: String,
        required: true,
        trim: true
    },
    vehiculeName: {
        type: String,
        required: true,
        trim: true
    },
    vehiculeModel: {
        type: String,
        required: true,
        trim: true
    },
    options: {
        type: Object
    },
    price: {
        type: Number
    }
});

export const configurationSchema = mongoose.model<Configuration>('Configuration', schema);
