import * as mongoose from 'mongoose';

export interface Vehicule extends mongoose.Document {
    name: string;
    gammeId: string;
    gammeName: string;
    visual: string;
    equipments: object;
    videos: object[];
    brochureFile: string;
    brochureQrCode: string;
    brochureName: string;
    brochureWallpaper: string;
    vehicleIframeUrl: string;
    accesoriesIframeUrl: string;
    configuratorIframeUrl: string;
}
