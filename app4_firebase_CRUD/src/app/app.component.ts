import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from './services/customer.service';
import { response } from 'express';
import { error, log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  customerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    salary: new FormControl("", [Validators.required]),
  });
  constructor(private customerService:CustomerService){

  }

  saveCustomer(){
   let customer = {
    name: this.customerForm.get('name')?.value,
    address: this.customerForm.get('address')?.value,
    salary: Number.parseInt(this.customerForm.get('salary')?.value!)
   }

   this.customerService.createCustomer(customer).then(response=>{
    console.log('cutomer saved');
    
   }).catch(error=>{
    console.log(error);
    
   })
    
  }
  
}
