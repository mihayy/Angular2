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
`
})
export class AppComponent {
    name = "Angular";
}