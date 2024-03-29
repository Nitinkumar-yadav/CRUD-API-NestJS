import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contacts/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
  ],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}

