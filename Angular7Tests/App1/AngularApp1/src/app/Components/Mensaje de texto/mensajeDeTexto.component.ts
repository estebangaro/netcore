import {Component} from "@angular/core";

@Component({
    selector: "msg-text-jumbotron",
    templateUrl: "./mensajeDeTexto.component.html"
})
export class mensajeDeTexto{
    customMsg: string = "";

    constructor(){
        this.customMsg = "";
    }

    ngOnInit(){
        if(this.customMsg == ""){
            this.customMsg = ":)";
        }
    }
}