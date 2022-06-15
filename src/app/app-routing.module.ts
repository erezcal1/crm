import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './component/contacts/contacts.component';
import { CustomersComponent } from './component/customers/customers.component';
import { NewCustomersComponent } from './component/new-customers/new-customers.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full',
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: 'customers/new',
    component: NewCustomersComponent,
  },
  {
    //the string ** will come at the end to redirect to the page not found
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  //forRoot - main app module
  //forChild - other modules
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
