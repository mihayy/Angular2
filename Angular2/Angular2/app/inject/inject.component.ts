import {Component} from "@angular/core";

import {InjectService} from "./inject.service"

@Component({
    selector: "inject",
    templateUrl: "./app/inject/inject.html"
})
export class InjectComponent {
    constructor(private injectService: InjectService) {

    }

    injectedList = this.injectService.getList();
}