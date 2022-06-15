import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomersService } from "src/app/services/customers.service";
import { Customer } from "src/app/shared/interfaces/customer";

@Component({
  selector: "app-new-customers",
  template: `
    <app-page-header
      icon="fas fa-user-plus"
      title="New Customer"
      description="Add A New Customer"
    ></app-page-header>

    <div class="row">
      <div class="col-12 mt-5">
        {{ form | json }}
        <form #ng_Form="ngForm" (ngSubmit)="on_Submit(ng_Form)">
          <div class="row justify-content-center">
            <div class="col-md-5 mb-3">
              <label for="first_Name">
                <span class="text-danger">*</span>First Name
              </label>
              <input
                type="text"
                #first_Name="ngModel"
                [(ngModel)]="form.first_Name"
                required
                minlength="2"
                name="first_Name"
                class="form-control"
                id="first_Name"
                [ngClass]="{
                  'is-invalid': first_Name.invalid && first_Name.touched
                }"
              />
            </div>
            <div class="col-md-5 mb-3">
              <label for="last_Name">
                <span class="text-danger">*</span>Last Name
              </label>
              <input
                type="text"
                #last_Name="ngModel"
                [(ngModel)]="form.last_Name"
                required
                minlength="2"
                name="last_Name"
                class="form-control"
                id="last_Name"
                [ngClass]="{
                  'is-invalid': last_Name.invalid && last_Name.touched
                }"
              />
            </div>
            <div class="col-md-5 mb-3">
              <label for="email">
                <span class="text-danger">*</span>Email
              </label>
              <input
                type="email"
                #email_Model="ngModel"
                [(ngModel)]="form.email"
                required
                pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
                name="email"
                class="form-control"
                id="email"
                [ngClass]="{
                  'is-invalid': email_Model.invalid && email_Model.touched
                }"
              />
            </div>
            <div class="col-md-5 mb-3">
              <label for="phone">
                <span class="text-danger">*</span>Phone
              </label>
              <input
                type="tel"
                #phone="ngModel"
                [(ngModel)]="form.phone"
                required
                pattern="^0[2-9]\\d{7,8}$"
                name="phone"
                class="form-control"
                id="phone"
                [ngClass]="{
                  'is-invalid': phone.invalid && phone.touched
                }"
              />
            </div>
            <div class="col-md-10 mb-3">
              <label for="address">Address </label>
              <textarea
                id="address"
                #address="ngModel"
                [(ngModel)]="form.address"
                name="address"
                rows="3"
                class="form-control"
              ></textarea>
            </div>
            <div class="col-md-10 mb-3">
              <label for="notes">Notes </label>
              <textarea
                id="notes"
                #notes="ngModel"
                [(ngModel)]="form.notes"
                name="notes"
                rows="3"
                class="form-control"
              ></textarea>
            </div>
          </div>
          <div class="fixed-bottom bg-success p-3 text-center">
            <a routerLink="/customers" href="" class="btn btn-secondary"
              >Cancel</a
            >
            <input
              type="button"
              class="btn btn-secondary ms-3"
              value="Reset"
              (click)="reset_Form(ng_Form)"
            />
            <input
              type="submit"
              [disabled]="ng_Form.form.invalid"
              class="btn btn-primary ms-3"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ["./new-customers.component.scss"],
})
export class NewCustomersComponent implements OnInit {
  form: Customer = {
    first_Name: "",
    last_Name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  };

  reset_Form(form: NgForm) {
    form.reset();
  }
  async on_Submit({ value, valid }: NgForm) {
    if (valid) {
      await this.customer_Service.add(value);
      this.router_Service.navigate(["/customers"]);
    }
  }

  constructor(
    private customer_Service: CustomersService,
    private router_Service: Router
  ) {}

  ngOnInit(): void {}
}
