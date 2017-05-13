import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `<h1>Hello {{name}}</h1> 
             <hr/>
             <for></for>
             <hr/>
             <binding></binding>
             <hr/>
             <inject></inject>
             <my-select-list></my-select-list>
             <story-characters [storyId]="7" (changed)=changed($event)></story-characters>
             <my-vehicle-list></my-vehicle-list>
`
})
export class AppComponent {
    name = "Angular";
    changed(changedCharacter: any) {
        if (changedCharacter) {
            console.log(`Event Emitter said you selected ${changedCharacter.name}`);
        }
    }
}