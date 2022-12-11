import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'; // we are importing interface 'Task'
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Tasks: Task[] = [];

  constructor(private taskService:TaskService) { }


  ngOnInit(): void { 
    //it fires away soon as it starts application
     this.taskService.getTask().subscribe((task)=>this.Tasks=task);//which is equivalent to Tasks: Task[] = Tasks;
  }

  someFun(task:Task){
    this.taskService.deletetheTask(task).subscribe(()=>(this.Tasks.filter((t)=>t.id ! == task.id)));
    this.ngOnInit();
  }

  // onToggleH(task:Task){
  //   task.reminder = !task.reminder;
  //   this.taskService.updateTask(task).subscribe((task)=>this.Tasks.indexOf((task.reminder)=>task.reminder.valueO)
  //   console.log('helloooo');
  // }

  
  onToggleH(task:Task){
    task.reminder = !task.reminder;
  
    this.taskService.updateTask(task).subscribe();
  }


  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>this.Tasks.push(task));
    
    
  }
}
