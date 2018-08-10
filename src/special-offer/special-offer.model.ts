import * as mongoose from 'mongoose';

export interface SpecialOffer extends mongoose.Document {
    offers: object[];
    legalNotice: string;
}
