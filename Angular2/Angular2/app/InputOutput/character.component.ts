import { Component, Input } from "@angular/core";
import { Character } from "./character.service";

@Component({
    selector: "story-character",
    templateUrl: "./app/InputOutput/character.component.html"
})
export class CharacterComponent {
    @Input() character: Character;
}
