import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-special-request-dialog',
  templateUrl: './special-request-dialog.component.html',
  styleUrls: ['./special-request-dialog.component.scss']
})
export class SpecialRequestDialogComponent implements OnInit {

  public requestSend: boolean = false;

  constructor(public dialogRef: MatDialogRef<SpecialRequestDialogComponent>) { }

  ngOnInit() {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }i

  private confirmRequest(): void {
    this.requestSend = true;
  }
}
