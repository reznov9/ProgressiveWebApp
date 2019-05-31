import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ModalComponentComponent } from './shared-components/modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ModalComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, {dataEncapsulation : false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
