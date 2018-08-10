import * as mongoose from 'mongoose';

export interface Brochure extends mongoose.Document {
    civility: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    gamme: string;
    brochureFile: string;
    brochureName: string;
    date: Date;
}
