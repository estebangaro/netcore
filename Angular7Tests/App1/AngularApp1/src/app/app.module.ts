import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders} from "./app.routing";

import { AppComponent } from './app.component';
import { buscadorDeEncabezados } from './Components/Buscador De Encabezados/buscadorDeEncabezados.component';
import { mensajeDeTexto } from './Components/Mensaje de texto/mensajeDeTexto.component';

@NgModule({
  declarations: [
    AppComponent,
    buscadorDeEncabezados,
    mensajeDeTexto
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
