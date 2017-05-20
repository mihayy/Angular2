import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {SelectListComponent} from "./selected/selected-list.component";
import {SelectComponent} from "./selected/selected.component";
import {VehicleListComponent} from "./http/vehicle-list.component";

import {RoutingCharactersComponent} from "./routingExample/characters.component";
import {RoutingCharacterComponent} from "./routingExample/character.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'characters' },
    { path: 'characters', component: SelectListComponent },
    { path: 'vehicles', component: VehicleListComponent },
    { path: 'routingCharacters', component: RoutingCharactersComponent },
    { path: 'routingCharacters/:id', component: RoutingCharacterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    SelectComponent,
    SelectListComponent,
    VehicleListComponent,
    RoutingCharactersComponent,
    RoutingCharacterComponent
];