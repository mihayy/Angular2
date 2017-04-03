import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent }  from "./app.component";
import { Vehicle } from "./for/for.component";
import { Binding } from "./binding/binding.component";
import { InjectComponent } from "./inject/inject.component";
import { InjectService } from "./inject/inject.service";
import { SelectListComponent } from "./selected/selected-list.component";
import { SelectComponent } from "./selected/selected.component";
import { CharacterComponent } from "./InputOutput/character.component";
import { CharactersComponent } from "./InputOutput/characters.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],  //modules we depend on
    declarations: [AppComponent, Vehicle, Binding, InjectComponent, SelectListComponent, SelectComponent, CharacterComponent, CharactersComponent], //declare components to use in our app
    providers: [InjectService], //provide services to app root injector
    bootstrap: [AppComponent] //starting component, root component
})
export class AppModule { }