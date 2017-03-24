import {Injectable} from "@angular/core";

@Injectable()
export class InjectService {

    getList = () : [{ id : number, name:string}] => [
        { id: 1, name: "Inject First car" },
        { id: 2, name: "Inject Second car" },
        { id: 3, name: "Inject Third car" },
        { id: 4, name: "Inject Forth car" }
    ];
}
