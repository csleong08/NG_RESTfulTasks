import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent implements OnInit {
export class AppComponent{
    title1 = 'Restful Tasks API';
    tasks = null;
    task = null;
    viewTask: boolean = false;
    selectedTask;

    constructor(private _httpService: HttpService){}

    allTasks() { 
      let observable = this._httpService.allTasks();
      observable.subscribe(data => {
        console.log("Got our data!", data)
        this.tasks = data;
        console.log(this.tasks);
        
      });
    }
    getTask(id) { 
      let observable = this._httpService.getTask(id);
      this.viewTask = true;
      observable.subscribe(data => {
        console.log("Got one data!", data);
        this.selectedTask = data;
        console.log("got this.task!", this.task);
      });
    }
  }
