import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CustomersService } from "src/app/services/customers.service";
import { Customer } from "src/app/shared/interfaces/customer";

@Component({
  selector: "app-customers",
  template: `
    <app-page-header
      icon="fas fa-address-book"
      title="Customers"
      description="Company customers details"
    ></app-page-header>

    <div class="row">
      <div class="col-12">
        <span class="float-end mt-3">
          <a routerLink="/customers/new" class="btn btn-primary">
            <i class="fas fa-plus-circle"></i>
            Add New Customer
          </a>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div *ngIf="customers$ | async as customers; else loading" class="mt-3">
          <table
            *ngIf="customers.length; else no_Customers"
            class="table table-bordered"
          >
            <thead>
              <tr>
                <th>#No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let customer of customers; index as index">
                <th>{{ index + 1 }}</th>
                <th>{{ customer.first_Name }}</th>
                <th>{{ customer.last_Name }}</th>
                <th>{{ customer.email }}</th>
                <th>{{ customer.phone }}</th>
                <th>{{ customer.address }}</th>
                <th>{{ customer.notes }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ng-template #no_Customers>
        <p><i>No Customers</i></p>
      </ng-template>
    </div>
    <ng-template #loading>
      <p><i>loading</i></p>
    </ng-template>
  `,
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private customer_Service: CustomersService) {
    this.customers$ = this.customer_Service.get_All();
  }

  ngOnInit(): void {}
}
