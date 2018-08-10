import * as mongoose from 'mongoose';
import { Model } from './model.model';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    options: {
        type: Array
    },
    price: {
        type: Number,
        required: true
    },
    vehiculeId: {
        type: String,
        required: true,
        trim: true
    },
    visuals: {
        type: Array
    },
    description: {
        type: String,
        trim: true
    },
    technicalDatas: {
        type: Object
    },
    vehicule: {
        type: Object
    },
    environment: {
        type: Object
    }
});

export const modelSchema = mongoose.model<Model>('Model', schema);
