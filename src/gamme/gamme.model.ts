import * as mongoose from 'mongoose';

export interface Gamme extends mongoose.Document {
    name: string;
}
