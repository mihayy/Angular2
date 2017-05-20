import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import './rxjs-extensions';

import { AppComponent }  from "./app.component";
import { Vehicle } from "./for/for.component";
import { Binding } from "./binding/binding.component";
import { InjectComponent } from "./inject/inject.component";
import { InjectService } from "./inject/inject.service";
import { CharacterComponent } from "./InputOutput/character.component";
import { CharactersComponent } from "./InputOutput/characters.component";
import { AsyncVehicleListComponent } from "./asyncPipe/vehicle-list.component";


import { AppRoutingModule, routableComponents } from "./app-routing.module";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],  //modules we depend on
    declarations: [
        routableComponents,
        AppComponent,
        Vehicle,
        Binding,
        InjectComponent,
        CharacterComponent,
        CharactersComponent,
        AsyncVehicleListComponent
    ], //declare components to use in our app
    providers: [InjectService], //provide services to app root injector
    bootstrap: [AppComponent] //starting component, root component
})
export class AppModule { }