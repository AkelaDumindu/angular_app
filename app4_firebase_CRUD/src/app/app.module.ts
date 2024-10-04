import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CustomerComponent } from './components/customer/customer.component';
// import { ProductComponent } from './components/product/product.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
// import { NewProductComponent } from './components/product/inner_item/new-product/new-product.component';
// import { UpdateProductComponent } from './components/product/inner_item/update-product/update-product.component';
// import { GetProductComponent } from './components/product/inner_item/get-product/get-product.component';

@NgModule({
  declarations: [
    AppComponent,
    // CustomerComponent,
    // ProductComponent,
    // NotFoundComponent,
    // NewProductComponent,
    // UpdateProductComponent,
    // GetProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
