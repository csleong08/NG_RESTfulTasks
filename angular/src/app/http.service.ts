import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
      this.allTasks();
  }
  allTasks(){
  // let tempObservable = this._http.get('/tasks');
  // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getTask(id){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
      return this._http.get('/tasks/' + id);
    }
  createTask(newtask){
    return this._http.post('/tasks', newtask);
  }
  oneTask(task_id){
    console.log('one task in the service');
    return this._http.get('/tasks/' + task_id);
  }
  updateTask(task){
    console.log("update task in the service");
    return this._http.put("/tasks/" + task._id, task);
  }
  deleteTask(task_id){
    console.log("delete one task in the service");
    return this._http.delete('/tasks/' + task_id);
  }
}
