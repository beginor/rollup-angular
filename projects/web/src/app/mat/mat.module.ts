import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatRoutingModule } from './mat-routing.module';
import { IndexComponent } from './index/index.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';


@NgModule({
  declarations: [
    IndexComponent,
    DialogContentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatRoutingModule
  ]
})
export class MatModule { }
