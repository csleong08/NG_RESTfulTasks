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
    getTask: boolean = false;
    // newTask: any;

    constructor(private _httpService: HttpService){
    }
    // ngOnInit(){
    //   this.newTask = {title: "", description: ""}
        // this.newTask = {title: "Learn Angular Forms", 
        //               description: "Two way binding is awesome!"}
    // }
    getTasksFromService() { 
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log("Got our data!", data)
        this.tasks = data;
        console.log(this.tasks);
        
      });
    }
    getTaskFromService(id) { 
      let observable = this._httpService.getTask(id);
      this.getTask = true;
      observable.subscribe(data => {
        console.log("Got one data!", data);
        this.task = data;
        console.log("got this.task!", this.task);
      });
    }
  }
