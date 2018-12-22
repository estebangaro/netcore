import { Component } from '@angular/core';
import { InfoHeader } from './Model/InfoHeader'
import { buscadorDeEncabezados } from './Components/Buscador De Encabezados/buscadorDeEncabezados.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  HeaderValues: InfoHeader;
  BuscadorEncab: buscadorDeEncabezados;

  constructor(){
    this.HeaderValues = new InfoHeader("Angular Application 1");
    this.BuscadorEncab = new buscadorDeEncabezados();
  }

  public openBuscadorEncabezados(){
    this.BuscadorEncab.Open();
  }
}
