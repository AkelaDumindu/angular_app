import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent , children:[
    { path: 'customer', loadChildren: () => import('./module/customer/customer.module').then(m => m.CustomerModule) }, 
  { path: 'order', loadChildren: () => import('./module/order/order.module').then(m => m.OrderModule) }, 
  { path: 'product', loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule) }

  ]}, 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
