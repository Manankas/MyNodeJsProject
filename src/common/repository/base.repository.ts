import * as mongoose from 'mongoose';
import { RepositoryRead } from './repository-read.interface';
import { RepositoryWrite } from './repository-write.interface';

export abstract class BaseRepository<T extends mongoose.Document>
    implements RepositoryRead<T>, RepositoryWrite<T> {
    private model: mongoose.Model<T>;

    constructor(schemaModel: mongoose.Model<T>) {
        this.model = schemaModel;
    }

    async find(conditions: Partial<T>): Promise<T[]> {
        return await this.model.find(conditions);
    }

    async findBy(conditions: Object): Promise<T[]> {
        return await this.model.find(conditions);
    }

    async findById(id: string): Promise<T | null> {
        return await this.model.findById(id);
    }

    async findOne(conditions: Partial<T>): Promise<T | null> {
        return await this.model.findOne(conditions);
    }

    async create(item: T): Promise<T> {
        return await this.model.create(item);
    }

    async delete(id: string): Promise<boolean> {
        await this.model.deleteOne({ _id: id });

        return true;
    }

    async update(item: T): Promise<T> {
        return await this.model.update({ _id: item._id }, item).then(() => item);
    }

    async partialUpdate(id: string, partial: Partial<T>): Promise<T | null> {
        const res = await this.model.findByIdAndUpdate(id, partial);
        if (res) {
            return await this.model.findById(id);
        } else {
            return Promise.reject('error, wrong id passed on parameter');
        }
    }

    async findAndSort(conditions: Partial<T>, criteria: string): Promise<T[]> {
        return await this.model.find(conditions).sort({ name: criteria });
    }
}
