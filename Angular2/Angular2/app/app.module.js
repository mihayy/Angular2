"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("./rxjs-extensions");
var app_component_1 = require("./app.component");
var for_component_1 = require("./for/for.component");
var binding_component_1 = require("./binding/binding.component");
var inject_component_1 = require("./inject/inject.component");
var inject_service_1 = require("./inject/inject.service");
var selected_list_component_1 = require("./selected/selected-list.component");
var selected_component_1 = require("./selected/selected.component");
var character_component_1 = require("./InputOutput/character.component");
var characters_component_1 = require("./InputOutput/characters.component");
var vehicle_list_component_1 = require("./http/vehicle-list.component");
var vehicle_list_component_2 = require("./asyncPipe/vehicle-list.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            for_component_1.Vehicle,
            vehicle_list_component_1.VehicleListComponent,
            binding_component_1.Binding, inject_component_1.InjectComponent,
            selected_list_component_1.SelectListComponent,
            selected_component_1.SelectComponent,
            character_component_1.CharacterComponent,
            characters_component_1.CharactersComponent,
            vehicle_list_component_2.AsyncVehicleListComponent
        ],
        providers: [inject_service_1.InjectService],
        bootstrap: [app_component_1.AppComponent] //starting component, root component
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map