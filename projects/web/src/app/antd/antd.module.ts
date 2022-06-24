import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AntdRoutingModule } from './antd-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        NzButtonModule,
        NzTableModule,
        NzMenuModule,
        NzLayoutModule,
        AntdRoutingModule
    ]
})
export class AntdModule { }
