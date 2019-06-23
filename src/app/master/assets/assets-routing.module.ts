import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssetsAddEditComponent} from './assets-add-edit/assets-add-edit.component';
import {AssetsLandingComponent} from './assets-landing/assets-landing.component';

const routes: Routes = [
  { path: '', component: AssetsLandingComponent },
  { path: 'create', component: AssetsAddEditComponent },
  { path: 'edit', component: AssetsAddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
