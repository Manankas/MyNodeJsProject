import * as mongoose from 'mongoose';
import { Vehicule } from '../vehicule/vehicule.model';

export interface Model extends mongoose.Document {
    name: string;
    price: number;
    options: string[];
    vehiculeId: string;
    visuals: string[];
    description: string;
    technicalDatas: object;
    vehicule: Vehicule | null;
    environment: object;
}
