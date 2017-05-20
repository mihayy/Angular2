import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";

import { Character, CharacterSerivce } from "./character.service";

@Component({
    selector: "routing-story-character",
    templateUrl: "./app/routingExample/character.component.html",
    providers: [CharacterSerivce]
})
export class RoutingCharacterComponent {
    private character: Character;

    private id: any;

    constructor(
        private characterService: CharacterSerivce,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        if (!this.character) {
            this.route
                .params
                .map(params => params['id'])
                .do(id => this.id = +id)
                .subscribe(id => this.getCharacter());
        }
    }

    getCharacter() {
        this.characterService.getCharacter(this.id)
            .subscribe(character => this.setEditCharacter(character));
    }

    setEditCharacter(character: Character) {
        if (character) {
            this.character = character;
        } else {
            this.goToCharacters();
        }
    }

    goToCharacters() {
        let route = ['/characters'];
        this.router.navigate(route);
    }


}
