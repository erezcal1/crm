import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { Customer } from "../shared/interfaces/customer";

@Injectable({
  providedIn: "root",
})
export class CustomersService {
  customer_Ref: AngularFirestoreCollection<Customer>;

  constructor(private customers: AngularFirestore) {
    this.customer_Ref = this.customers.collection("customers");
  }

  add(customer: Customer) {
    return this.customer_Ref.add(customer);
  }

  get_All() {
    return this.customer_Ref.valueChanges({ id_Field: "id" });
  }
}
