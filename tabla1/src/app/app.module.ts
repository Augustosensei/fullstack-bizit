import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
