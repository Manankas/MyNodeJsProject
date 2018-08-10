import * as mongoose from 'mongoose';

export interface Contact extends mongoose.Document {
    firstname: string;
    lastname: string;
    address: string;
    phone: string;
    mail: string;
}
