import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
    email: string;
    password: string;
    socketId: string;
    validPassword: (p: string) => Promise<boolean>;
}
