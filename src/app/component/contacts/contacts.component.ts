import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contacts } from 'src/app/shared/interfaces/contacts';

@Component({
  selector: 'app-contacts',
  template: `
    <app-page-header
      icon="fas fa-user"
      title="Contacts"
      description="Company contacts details"
    ></app-page-header>
    <table
      class="table table-bordered mt-3"
      *ngIf="contacts.length; else no_Contacts"
    >
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>BirthDay</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let contact of contacts; index as index">
          <td>{{ index + 1 }}</td>
          <td>{{ contact.name | titlecase }}</td>
          <td>{{ contact.email | lowercase }}</td>
          <td>{{ contact.birthDay | date: 'dd/MM/yyyy' }}</td>
          <td>
            <ul *ngIf="contact.phone_number?.length; else no_Phone">
              <li *ngFor="let phone of contact.phone_number">{{ phone }}</li>
            </ul>
            <ng-template #no_Phone><i>No Phone Number</i></ng-template>
          </td>
        </tr>
      </tbody>
    </table>
    <ng-template #no_Contacts>
      <div class="alert alert-warning">No contacts found</div>
    </ng-template>
  `,
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contacts[] = [];

  constructor(contact_Service: ContactsService) {
    this.contacts = contact_Service.get_All();
  }

  ngOnInit(): void {}
}
