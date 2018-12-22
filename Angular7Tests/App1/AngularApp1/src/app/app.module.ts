import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { buscadorDeEncabezados } from './Components/Buscador De Encabezados/buscadorDeEncabezados.component'

@NgModule({
  declarations: [
    AppComponent,
    buscadorDeEncabezados
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
