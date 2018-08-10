import * as mongoose from 'mongoose';
import { Vehicule } from './vehicule.model';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gammeId: {
        type: String,
        required: true,
        trim: true
    },
    gammeName: {
        type: String,
        trim: true
    },
    visual: {
        type: String,
        required: true,
        trim: true
    },
    equipments: {
        type: Object
    },
    videos: {
        type: Array
    },
    brochureFile: {
        type: String
    },
    brochureQrCode: {
        type: String
    },
    brochureName: {
        type: String,
        trim: true
    },
    brochureWallpaper: {
        type: String,
        trim: true
    },
    vehicleIframeUrl: {
        type: String
    },
    accesoriesIframeUrl: {
        type: String
    },
    configuratorIframeUrl: {
        type: String
    }
});

export const vehiculeSchema = mongoose.model<Vehicule>('Vehicule', schema);
