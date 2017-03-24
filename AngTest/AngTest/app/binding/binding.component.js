"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Binding = (function () {
    function Binding() {
        this.title = "Angular 2 Two-Way Binding";
        this.story = {
            name: "The Empire Strikes Back"
        };
    }
    Binding.prototype.changeName = function () {
        this.story.name = "Jedi Rules";
    };
    Binding.prototype.log = function (message) {
        console.log(message);
    };
    return Binding;
}());
Binding = __decorate([
    core_1.Component({
        selector: "binding",
        templateUrl: "./app/binding/binding.html"
    })
], Binding);
exports.Binding = Binding;
//# sourceMappingURL=binding.component.js.map