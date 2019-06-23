import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsAddEditComponent } from './assets-add-edit/assets-add-edit.component';
import { AssetsLandingComponent } from './assets-landing/assets-landing.component';
import {NgbModule,NgbDate} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AssetsAddEditComponent, AssetsLandingComponent],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
  ]
})
export class AssetsModule { }
