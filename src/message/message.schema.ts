import * as mongoose from 'mongoose';
import { Message } from './message.model';

const schema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true
    },
    from: {
        type: String
    },
    to: {
        type: String,
        required: true
    },
    delivered: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date
    }
});

export const messageSchema = mongoose.model<Message>('Message', schema);
