import {Component} from "@angular/core"

@Component({
    selector: "for",
    templateUrl: "./app/for/for.html"
})
export class Vehicle {
    vehicles = [
        { id: 1, name: "First car" },
        { id: 2, name: "Second car" },
        { id: 3, name: "Third car" }
    ]
}