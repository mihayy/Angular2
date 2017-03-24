import {Component, Input} from "@angular/core";

import {Character} from "./character";

@Component({
    selector: "my-select",
    inputs: ["character"],
    templateUrl: "./app/selected/selected.component.html"
})
export class SelectComponent  {
    character: Character;
    @Input() otherApproachCharacter: Character;
}