import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'RESTfulTasks Continued';
    title2 = 'All the task';
    title3 = 'The third task';
    tasks = [];
    // allTasks: string[];
    // ngOnInit(){
    //   this.allTasks = [
    //     "Learn Angular - Understand services",
    //     "Manipulate the DOM - Use the 'for of' loop",
    //     "Bind events - Parantheses indicate events" 
    //   ];
    // }

    constructor(private _httpService: HttpService){
    }
    ngOnInit(){
      this.getTasksFromService()
    }
    getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log("Got our data!", data);
        for (let i in data) {
          this.tasks.push(`${data[i].title} - ${data[i].description}`);
        }
      });
    }
  }
