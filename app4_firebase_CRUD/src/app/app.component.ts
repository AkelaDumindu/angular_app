import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from './services/customer.service';
import { response } from 'express';
import { error, log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  customerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    salary: new FormControl("", [Validators.required]),
  });
  constructor(private customerService:CustomerService){

  }
  customerList:any[]=[];

  ngOnInit(): void {   //fetch just triggle(load) user interface
    this.customerService.loadAll().subscribe((data)=>{
      this.customerList = data.map((e:any)=>{
        return {
          id:e.payload.doc.id,
          ...e.payload.doc.data()    //... that mean add to the array
        }
      });
    });
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
