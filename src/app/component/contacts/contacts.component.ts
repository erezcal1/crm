import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    Contacts
    <app-page-header
      icon="fas fa-user"
      title="some title"
      description="some Description"
    ></app-page-header>
  `,
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
