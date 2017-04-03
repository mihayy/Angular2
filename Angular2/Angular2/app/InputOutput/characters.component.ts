import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Character, CharacterSerivce } from "./character.service";

@Component({
    selector: "story-characters",
    templateUrl: "./app/InputOutput/characters.component.html",
    styleUrls: ["./app/InputOutput/characters.component.css"],
    providers: [CharacterSerivce]  
    })
export class CharactersComponent implements OnInit {

    @Output() changed = new EventEmitter<Character>();

    @Input() storyId: number;

    characters: Character[];
    selectedCharacter: Character;

    constructor(private characterService: CharacterSerivce) { }

    ngOnInit(): void {
        this.characterService.getCharacters(this.storyId)
            .subscribe(characters => this.characters = characters);
    }

    select(selectedCharacter : Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    }
}