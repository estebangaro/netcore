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
        this.HideElement("buscadordeencabezados");
    }
    public Encabezado: Encabezado; // propiedades de visualización de resultados de consulta.

    public Open(){
        this.ShowElement("buscadordeencabezados");
    }

    public CleanFields(){
        (<HTMLInputElement>document.getElementById("cad")).value = "";
        (<HTMLInputElement>document.getElementById("oc")).value = "";
    }

    HideElement(element: string){
        document.getElementById(element)
        .attributes.getNamedItem("style")
        .value = "display:none;";

        this.CleanFields();
    }

    public ShowElement(element: string){
        document.getElementById(element)
        .attributes.getNamedItem("style")
        .value = "display:block;";
    }
}