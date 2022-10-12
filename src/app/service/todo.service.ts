import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itodo, Itodoadd } from '../model/todo/todo.module';
import { APIResponse } from '../model/todo/Apiveiw';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  getAll():Observable<APIResponse>{
    return this.http.get<APIResponse>("https://api.mohamed-sadek.com/Task/Get")
  }
  Deleteone(ID:number): Observable<APIResponse> {
    return this.http.delete<APIResponse>("https://api.mohamed-sadek.com/Task/Delete?id="+ID)
  }
  create(Title:Itodoadd): Observable<APIResponse>{
    return this.http.post<APIResponse>("https://api.mohamed-sadek.com/Task/POST",Title)
  }
  edite(Title:Itodo):Observable<APIResponse> {
    return this.http.put<APIResponse>("https://api.mohamed-sadek.com/Task/PUT",Title)
  }
}
