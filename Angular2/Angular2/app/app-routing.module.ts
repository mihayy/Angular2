import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {SelectListComponent} from "./selected/selected-list.component";
import {SelectComponent} from "./selected/selected.component";
import {VehicleListComponent} from "./http/vehicle-list.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'characters' },
    { path: 'characters', component: SelectListComponent },
    { path: 'characters/:id', component: SelectComponent },
    { path: 'vehicles', component: VehicleListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    SelectComponent,
    SelectListComponent,
    VehicleListComponent
];