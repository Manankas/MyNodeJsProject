import * as mongoose from 'mongoose';
import { Gamme } from './gamme.model';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

export const gammeSchema = mongoose.model<Gamme>('Gamme', schema);
