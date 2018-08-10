import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { User } from './user.model';
import { userRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';

const notImplemented = 'Method not implemented.';

class UserService implements ServiceRead<User>, ServiceWrite<User> {
    async getList(): Promise<Partial<User>[]> {
        const users = await userRepository.find({});

        return users.map(({ _id, email }) => ({ _id, email }));
    }

    async getById(id: string): Promise<User | null> {
        return await userRepository.findById(id);
    }

    async count(): Promise<number> {
        const contacts = await userRepository.find({});

        return contacts.length;
    }

    async create(item: User): Promise<User> {
        return await userRepository.create(item);
    }

    async delete(id: string): Promise<boolean> {
        return await userRepository.delete(id);
    }

    async update(item: User): Promise<User> {
        if (item.password) {
            item.password = await bcrypt.hash(item.password, 10);
        }

        return await userRepository.update(item);
    }
    async partialUpdate(id: string, item: Partial<User>): Promise<User | null> {
        if (item.password) {
            item.password = await bcrypt.hash(item.password, 10);
        }

        return await userRepository.partialUpdate(id, item);
    }
}

export const userService = new UserService();
