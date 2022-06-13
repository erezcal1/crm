import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  template: `
    <app-page-header
      icon="fas fa-address-book"
      title="Customers"
      description="Company customers details"
    ></app-page-header>
  `,
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
