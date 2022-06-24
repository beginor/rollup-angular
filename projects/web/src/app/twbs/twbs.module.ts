import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { TwbsRoutingModule } from './twbs-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    NgbAlertModule,
    TwbsRoutingModule
  ]
})
export class TwbsModule { }
