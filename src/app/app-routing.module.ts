import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'twbs', loadChildren: () => import('./twbs/twbs.module').then(m => m.TwbsModule)
    },
    {
        path: 'mat', loadChildren: () => import('./mat/mat.module').then(m => m.MatModule)
    },
    {
        path: 'antd', loadChildren: () => import('./antd/antd.module').then(m => m.AntdModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
