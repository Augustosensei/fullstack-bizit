import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { PersonaComponent } from './pages/persona/persona.component';
import { NavbarComponent } from './pages/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
