import { BaseRepository } from '../common/repository/base.repository';
import { User } from './user.model';
import { userSchema } from './user.schema';

class UserRepository extends BaseRepository<User> {
    constructor() {
        super(userSchema);
    }

    async getSocketOwnerId(socketId: string): Promise<string | null> {
        const user = await this.findOne({ socketId });

        return user && user._id;
    }

    async getSocketId(userId: string): Promise<string | null> {
        const user = await this.findById(userId);

        return user && user.socketId;
    }
}

export const userRepository = new UserRepository();
