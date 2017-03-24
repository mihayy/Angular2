import {Component} from "@angular/core"

@Component({
    selector: "binding",
    templateUrl: "./app/binding/binding.html"
})
export class Binding {
    title = "Angular 2 Two-Way Binding";
    story = {
        name: "The Empire Strikes Back"
    };
    changeName() {
        this.story.name = "Jedi Rules";
    }
    log(message: string) {
        console.log(message);
    }
}