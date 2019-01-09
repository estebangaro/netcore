import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Import components to enabled routing
import {buscadorDeEncabezados} from "./Components/Buscador De Encabezados/buscadorDeEncabezados.component";
import { mensajeDeTexto } from './Components/Mensaje de texto/mensajeDeTexto.component';

const appRoutes: Routes = [{path: '', component: buscadorDeEncabezados},
    {path: 'buscadorEncabezados', component: buscadorDeEncabezados},
    {path: 'mensaje/texto', component: mensajeDeTexto},
    {path: '**', component: buscadorDeEncabezados},];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);