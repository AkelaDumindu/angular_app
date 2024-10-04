import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewProductComponent } from './components/product/inner_item/new-product/new-product.component';
import { GetProductComponent } from './components/product/inner_item/get-product/get-product.component';
import { UpdateProductComponent } from './components/product/inner_item/update-product/update-product.component';

const routes: Routes = [
  {path:'', redirectTo:'/customer', pathMatch:'full'},
  {path:'customer/:id', component:CustomerComponent},
  {path:'product', component:ProductComponent, children:[
    {path:'new', component:NewProductComponent},
    {path:'find', component:GetProductComponent},
    {path:'update', component:UpdateProductComponent},
  ]},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
