import { Component } from "@angular/core";
import { Encabezado } from "../../Model/Encabezado";

@Component({
    templateUrl: "./buscadorDeEncabezados.component.html",
    styleUrls: ["./buscadorDeEncabezados.component.css"],
    selector: "buscador-de-encabezados"
})
export class buscadorDeEncabezados{
    public estiloPopup: string;
    constructor() { // propiedades de búsqueda.
        this.Encabezado = new Encabezado('', '', '', 0);
    }
    ngOnInit(){
        this.HideElement();
    }
    public Encabezado: Encabezado; // propiedades de visualización de resultados de consulta.
    public estiloForm = 'block';
    public estiloData = 'none';

    public Open(){
        this.ShowElement();
    }

    public CleanFields(){
        this.Encabezado.cadena = 0;
        this.Encabezado.numeOc = "";
    }

    public HideElement(){
        this.estiloPopup = 'none';

        this.CleanFields();
    }

    public ShowElement(){
        this.estiloPopup = 'block';
    }
}