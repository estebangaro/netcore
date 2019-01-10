//import angular routing modules required ** to work with methods an objects **
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Import components to enabled routing
import {buscadorDeEncabezados} from "./Components/Buscador De Encabezados/buscadorDeEncabezados.component";
import { mensajeDeTexto } from './Components/Mensaje de texto/mensajeDeTexto.component';

//Set route collection, to specify components routes relation
const appRoutes: Routes = [{path: '', component: buscadorDeEncabezados},
    {path: 'buscadorEncabezados', component: buscadorDeEncabezados},
    {path: 'mensaje', component: mensajeDeTexto},
    {path: 'mensaje/:txtpersonalizado', component: mensajeDeTexto},
    {path: 'mensaje/:txtpersonalizado/:txt2', component: mensajeDeTexto},
    {path: '**', component: buscadorDeEncabezados},];

//Set variables to configure routing in aplication module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);