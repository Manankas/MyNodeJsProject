import { BaseRepository } from '../common/repository/base.repository';
import { Message } from './message.model';
import { messageSchema } from './message.schema';

class MessageRepository extends BaseRepository<Message> {
    constructor() {
        super(messageSchema);
    }

    getUndeliveredMessages(to: string): Promise<Message[]> {
        return this.find({ to, delivered: false });
    }

    setMessageAsDelivered(messageId: string): Promise<Message | null> {
        return this.partialUpdate(messageId, { delivered: true });
    }
}

export const messageRepository = new MessageRepository();
