import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './pages/hijo/hijo.component';
import { Hijo2Component } from './pages/hijo2/hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    Hijo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
