import {Component} from "@angular/core";
import {Character} from "./character";

@Component({
    selector: "my-select-list",
    templateUrl:"./app/selected/selected-list.component.html"
})
export class SelectListComponent {
    characters : Character[] = [
        new Character(1, "Han Solo1"),
        new Character(2, "Han Solo2"),
        new Character(3, "Han Solo3"),
        new Character(4, "Han Solo4")
    ];

    selectedCharacter: Character;

    select(character: Character) {
        this.selectedCharacter = character;
        console.log(character);
    }
}