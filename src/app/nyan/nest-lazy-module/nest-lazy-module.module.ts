import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NestLazyModuleRoutingModule } from './nest-lazy-module-routing.module';
import { NestLazyModuleComponent } from './nest-lazy-module.component';
import {NestedFeatureStateModule} from "./nested-feature-state.module";

const routes: Routes = [
  { path: '', component: NestLazyModuleComponent }
];

@NgModule({
  declarations: [NestLazyModuleComponent],
  imports: [
    CommonModule,
    NestLazyModuleRoutingModule,
    RouterModule.forChild(routes),
    NestedFeatureStateModule
  ]
})
export class NestLazyModuleModule { }
