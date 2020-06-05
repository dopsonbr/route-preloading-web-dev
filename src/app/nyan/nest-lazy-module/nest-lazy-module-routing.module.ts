import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestLazyModuleComponent } from './nest-lazy-module.component';

const routes: Routes = [{ path: '', component: NestLazyModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestLazyModuleRoutingModule { }
