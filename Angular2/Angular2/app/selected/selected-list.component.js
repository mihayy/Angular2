"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var character_1 = require("./character");
var SelectListComponent = (function () {
    function SelectListComponent() {
        this.characters = [
            new character_1.Character(1, "Han Solo1"),
            new character_1.Character(2, "Han Solo2"),
            new character_1.Character(3, "Han Solo3"),
            new character_1.Character(4, "Han Solo4")
        ];
    }
    SelectListComponent.prototype.select = function (character) {
        this.selectedCharacter = character;
        console.log(character);
    };
    return SelectListComponent;
}());
SelectListComponent = __decorate([
    core_1.Component({
        selector: "my-select-list",
        templateUrl: "./app/selected/selected-list.component.html"
    })
], SelectListComponent);
exports.SelectListComponent = SelectListComponent;
//# sourceMappingURL=selected-list.component.js.map