import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'projects/ng-zorro';

import { AntdRoutingModule } from './antd-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        NzButtonModule,
        AntdRoutingModule
    ]
})
export class AntdModule { }
