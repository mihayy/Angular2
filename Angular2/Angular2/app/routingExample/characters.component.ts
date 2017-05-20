import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { Character, CharacterSerivce } from "./character.service";

@Component({
    selector: "routing-story-characters",
    templateUrl: "./app/routingExample/characters.component.html",
    styleUrls: ["./app/routingExample/characters.component.css"],
    providers: [CharacterSerivce]  
    })
export class RoutingCharactersComponent implements OnInit {

    characters: Observable<Character[]>;

    constructor(private characterService: CharacterSerivce) { }

    ngOnInit(): void {
        this.characters = this.characterService.getCharacters();
    }
}