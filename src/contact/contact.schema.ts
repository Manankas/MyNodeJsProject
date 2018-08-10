import * as mongoose from 'mongoose';
import { Contact } from './contact.model';

const schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    mail: {
        type: String,
        required: true,
        trim: true
    }
});

export const contactSchema = mongoose.model<Contact>('Contact', schema);
