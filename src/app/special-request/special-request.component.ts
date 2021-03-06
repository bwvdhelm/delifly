import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SpecialRequestDialogComponent } from './special-request-dialog/special-request-dialog.component';

@Component({
  selector: 'app-special-request',
  templateUrl: './special-request.component.html',
  styleUrls: ['./special-request.component.scss']
})
export class SpecialRequestComponent implements OnInit {

  @Input() buttonText: string;
  @Input() headerText: string;
  @Input() hideDescription: boolean = false;

  image = '/src/assets/extra/marble_texture.jpg'

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openSpecialRequestDialog(): void {
    const dialogRef = this.dialog.open(SpecialRequestDialogComponent,
      {panelClass: ['special-request-dialog-configuration', 'dialog-no-padding']
      }
      );
  }

}
