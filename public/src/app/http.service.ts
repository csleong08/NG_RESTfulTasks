import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
      this.getTasks();
  }
  getTasks(){
  // let tempObservable = this._http.get('/tasks');
  // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getTask(id){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
      return this._http.get('/tasks/' + id);
    }
  addTask(newtask){
    return this._http.post('/task', newtask);
  }
}
