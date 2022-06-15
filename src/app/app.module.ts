import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { SideNavComponent } from "./component/side-nav/side-nav.component";
import { PageHeaderComponent } from "./utils/page-header/page-header.component";
import { ParagraphPipe } from "./pipes/paragraph.pipe";
import { ContactsComponent } from "./component/contacts/contacts.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { CustomersComponent } from "./component/customers/customers.component";
import { environment } from "src/environments/environment.prod";
import { NewCustomersComponent } from "./component/new-customers/new-customers.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavComponent,
    PageHeaderComponent,
    ParagraphPipe,
    ContactsComponent,
    PageNotFoundComponent,
    CustomersComponent,
    NewCustomersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
