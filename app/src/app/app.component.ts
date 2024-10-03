import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowMoreModalComponent } from './show-more-modal/show-more-modal.component';
import { PostService } from './service/post.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Correct plural
})
export class AppComponent implements OnInit {
  postArray: any[] = [];  // Initialize as empty array

  constructor(private http: HttpClient, private dialog: MatDialog, private service:PostService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.service.findAll().subscribe(response=>{
      this.postArray=response;
      console.log(this.postArray);
      
    }
      
      
    );
  }

  // Open the dialog with post title and body
  showData(post: any): void {
    this.dialog.open(ShowMoreModalComponent, {
      data: { title: post.title, body: post.body },
      width: '500px'  // Customize dialog width
    });
  }
}
