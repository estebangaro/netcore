import { Component } from "@angular/core";
import { Encabezado } from "../../Model/Encabezado";

@Component({
    templateUrl: "./buscadorDeEncabezados.component.html",
    styleUrls: ["./buscadorDeEncabezados.component.css"],
    selector: "buscador-de-encabezados"
})
export class buscadorDeEncabezados{
    public numOc: string;
    public cadena: number;

    constructor() { // propiedades de búsqueda.
        this.Encabezado = new Encabezado('', '', '', 0);
        this.numOc = "";
        this.cadena = 0;
    }
    ngOnInit(){
        $("#buscadordeencabezados").hide();
    }
    public Encabezado: Encabezado; // propiedades de visualización de resultados de consulta.

    public Open(){
        $("#buscadordeencabezados").show();
    }
}