import * as mongoose from 'mongoose';
import { SpecialOffer } from './special-offer.model';

const schema = new mongoose.Schema({
    offers: {
        type: Array
    },
    legalNotice: {
        type: String,
        required: true,
        trim: true
    }
});

export const specialOfferSchema = mongoose.model<SpecialOffer>('SpecialOffer', schema);
