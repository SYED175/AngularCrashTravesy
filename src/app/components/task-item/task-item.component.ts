import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task!: Task; 

  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleReminder = new EventEmitter();

  faMizzu = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  Delete(task:Task){
    //console.log(11234); // just retract if emitter thing doesn't work.
     this.onDeleteTask.emit(task);
  }

  //first TIME it wont work but after changing the name of function then re run its working!! wutt?
  onToggleG(task:Task){
      this.onToggleReminder.emit(task);
      //console.log('bhiiii');
  }

  

}
