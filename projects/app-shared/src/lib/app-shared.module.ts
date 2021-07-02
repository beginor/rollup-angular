import { NgModule } from '@angular/core';
import { AppSharedComponent } from './app-shared.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';



@NgModule({
  declarations: [
    AppSharedComponent,
    SvgIconComponent
  ],
  imports: [
  ],
  exports: [
    AppSharedComponent,
    SvgIconComponent
  ]
})
export class AppSharedModule { }
