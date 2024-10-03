import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit{
  selectedId:any
  constructor(private activatedRouter:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(response=>{
      this.selectedId = response.get('id');
    })
  }


}
