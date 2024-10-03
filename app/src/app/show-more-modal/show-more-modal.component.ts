import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-more-modal',
  templateUrl: './show-more-modal.component.html',
  styleUrls: ['./show-more-modal.component.scss']  // Correct plural form
})
export class ShowMoreModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowMoreModalComponent>,  // Reference to the opened dialog
    @Inject(MAT_DIALOG_DATA) public data: any  // Injecting the data passed from the parent component
  ) { }
}
