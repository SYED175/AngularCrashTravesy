import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  @Output() submitTheTask = new EventEmitter();
  
  text:String | undefined;
  day:String | undefined;
  reminder:boolean | undefined;

  showAddTaskForm : boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService:UiService) {
    this.uiService.onToggle().subscribe((value)=>this.showAddTaskForm = value);
   }

  ngOnInit(): void {
  }
 
  submitTask(){

    if(!this.text){
      alert('Please Add Task');
      return;
    }

    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.submitTheTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder=false;


  }
}





