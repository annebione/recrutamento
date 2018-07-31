import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MedicModule } from './modules/medic/medic.module'
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';

import { CPFMask } from 'cpf-mask-ng2';

@NgModule({
  declarations: [
    AppComponent,
    CPFMask
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MedicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
