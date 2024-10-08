import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.scss'
})
export class UpdateCustomerComponent implements OnInit {
  customerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    salary: new FormControl("", [Validators.required]),
  });
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private customerService:CustomerService){

  }

  selectedCustomerId: any;
  customer:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(response=>{
      this.selectedCustomerId = response.get('id');
      this.customerService.findCustomer(this.selectedCustomerId).subscribe(selectedCustomerData=>{
        this.customer = selectedCustomerData;

        this.customerForm.patchValue({
          name:this.customer.name,
          address:this.customer.address,
          salary:this.customer.salary,
        });
      });
    });

    
  }
  updateCustomer(){
    
      let customer = {
       name: this.customerForm.get('name')?.value,
       address: this.customerForm.get('address')?.value,
       salary: Number.parseInt(this.customerForm.get('salary')?.value!)
      }
   
      this.customerService.updateCustomer(this.selectedCustomerId,customer).then(response=>{
       console.log('cutomer updated');
      //  this.router.navigate(['/new', asdddf]);
      // this.router.navigateByUrl('/new/asdddf');  //if want to pass the value 
       this.router.navigateByUrl('/new');    
       
      }).catch(error=>{
       console.log(error);
       
      })
       
     
  }

}
