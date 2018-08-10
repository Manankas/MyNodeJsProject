import * as mongoose from 'mongoose';

export interface Configuration extends mongoose.Document {
    borneId: string;
    vehiculeName: string;
    vehiculeModel: string;
    options: object;
    price: number;
}
