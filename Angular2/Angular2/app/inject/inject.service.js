"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var InjectService = (function () {
    function InjectService() {
        this.getList = function () { return [
            { id: 1, name: "Inject First car" },
            { id: 2, name: "Inject Second car" },
            { id: 3, name: "Inject Third car" },
            { id: 4, name: "Inject Forth car" }
        ]; };
    }
    return InjectService;
}());
InjectService = __decorate([
    core_1.Injectable()
], InjectService);
exports.InjectService = InjectService;
//# sourceMappingURL=inject.service.js.map