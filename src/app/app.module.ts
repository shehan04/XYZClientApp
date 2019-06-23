import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FormsModule } from '@angular/forms';
import {NgbModule,NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import { DataService } from './shared/Services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [DataService,ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
