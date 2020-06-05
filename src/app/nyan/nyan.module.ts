import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NyanComponent } from './nyan.component';
import { RouterModule } from '@angular/router';
import {FeatureStateModule} from "./feature-state.module";

@NgModule({
  declarations: [NyanComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: NyanComponent
      },
      { path: 'nested', loadChildren: () => import('./nest-lazy-module/nest-lazy-module.module').then(m => m.NestLazyModuleModule) }
    ]),
    CommonModule,
    FeatureStateModule
  ]
})
export class NyanModule { }
