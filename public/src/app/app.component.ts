gitimport { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
// export class AppComponent{
    title1 = 'Restful Tasks API';
    tasks = null;
    task = null;
    getTask: boolean = false;
    newTask;
    selectedTask;
    errors;

    constructor(private _httpService: HttpService){}
    ngOnInit(){
      this.allTasks();
      // this.newTask = {title: "", description: ""}
      this.resetTask();
    }
    createTask(){
      let observable = this._httpService.createTask(this.newTask);
      observable.subscribe(data => {
        console.log("Got data from post back", data);
        this.allTasks();
        if('errors' in data) {
          this.errors = data;
        }
        this.allTasks();
      });
      // this.newTask = {title:"", description: ""};
      this.resetTask();
    }
    allTasks() { 
      let observable = this._httpService.allTasks();
      observable.subscribe(data => {
        console.log("Got our data!", data)
        this.tasks = data;
        console.log(this.tasks);
        
      });
    }
    resetTask(){
      this.newTask = {title:"", description: ""};
    }
    oneTask(task_id){
      console.log('this is the one task in the component');
      let observable = this._httpService.oneTask(task_id);
      observable.subscribe(data => {
        console.log("Got our one task data!", data);
        this.selectedTask = data;
      })
      // this.selectedTask={"title":task.title, "description":task.description};
    }
    updateTask(){
      console.log("this is the update task in the component");
      console.log(this.selectedTask.title);
      let observable = this._httpService.updateTask(this.selectedTask);
      observable.subscribe(data => {
        console.log("updated our data!", data);
        this.allTasks();
      })
      this.selectedTask = false;
    }
    deleteTask(task_id){
      console.log("this is the delete task in the component");
      let observable = this._httpService.deleteTask(task_id);
      observable.subscribe(data => {
        console.log("deleted task!", data);
        this.allTasks();
      })
    }
  }
