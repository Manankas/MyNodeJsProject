import * as mongoose from 'mongoose';

export interface Message extends mongoose.Document {
    id: string;
    body: string;
    from: string;
    to: string;
    delivered: boolean;
    date: Date;
}
