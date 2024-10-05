import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CustomerComponent } from './components/customer/customer.component';
// import { ProductComponent } from './components/product/product.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
// import { NewProductComponent } from './components/product/inner_item/new-product/new-product.component';
// import { UpdateProductComponent } from './components/product/inner_item/update-product/update-product.component';
// import { GetProductComponent } from './components/product/inner_item/get-product/get-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateCustomerComponent,
    NewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
