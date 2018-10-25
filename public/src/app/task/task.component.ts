import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title = "from Task.Component!"; 

  @Input() getTask; any;
  constructor() { }

  ngOnInit() { }

}
