import { BaseRepository } from '../common/repository/base.repository';
import { Contact } from './contact.model';
import { contactSchema } from './contact.schema';

class ContactRepository extends BaseRepository<Contact> {
    constructor() {
        super(contactSchema);
    }
}

export const contactRepository = new ContactRepository();
