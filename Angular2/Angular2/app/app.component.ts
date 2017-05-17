import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app/app.component.html"
})
export class AppComponent {
    name = "Angular";
    changed(changedCharacter: any) {
        if (changedCharacter) {
            console.log(`Event Emitter said you selected ${changedCharacter.name}`);
        }
    }
}