import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { Contact } from './contact.model';
import { contactRepository } from './contact.repository';

const notImplemented = 'Method not implemented.';

class ContactService implements ServiceRead<Contact>, ServiceWrite<Contact> {
    async getList(): Promise<Contact[]> {
        return await contactRepository.find({});
    }

    async getById(id: string): Promise<Contact | null> {
        return await contactRepository.findById(id);
    }

    async count(): Promise<number> {
        const contacts = await contactRepository.find({});

        return contacts.length;
    }

    async create(item: Contact): Promise<Contact> {
        throw new Error(notImplemented);
    }

    async delete(id: string): Promise<boolean> {
        throw new Error(notImplemented);
    }

    async update(item: Contact): Promise<Contact> {
        throw new Error(notImplemented);
    }
}

export const contactService = new ContactService();
