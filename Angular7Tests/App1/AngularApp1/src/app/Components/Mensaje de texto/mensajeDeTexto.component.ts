import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router"; //To support route values

@Component({
    selector: "msg-text-jumbotron",
    templateUrl: "./mensajeDeTexto.component.html"
})
export class mensajeDeTexto{
    customMsg: string = "";
    customMsg2: string = "";

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.customMsg = params["txtpersonalizado"];
            this.customMsg2 = params["txt2"];
        });

        /* if(!this.customMsg){
            this.customMsg = ":)";
        }

        if(!this.customMsg2){
            this.customMsg2 = ":))";
        } */
    }
}