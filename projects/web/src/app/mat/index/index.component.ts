import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
    DialogContentComponent
} from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-mat-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  public ngOnInit(): void { }

  public openDialog(): void {
      const dialogRef = this.dialog.open(DialogContentComponent, { });
      dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
      });
  }

}
