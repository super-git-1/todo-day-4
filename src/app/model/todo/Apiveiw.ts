import { Itodo } from "./todo.module";


export class APIResponse{
    Data!:Itodo[];
    Message="";
    Success=true;
    IsAuthorized=true
}
