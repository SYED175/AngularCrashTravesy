import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  title = 'Task Tracker';
  showAddTaskBtn:boolean=false;
  subscription: Subscription | undefined;


  constructor(private uiService:UiService) {
    this.uiService.onToggle().subscribe((value)=>this.showAddTaskBtn = value);
   }

  ngOnInit(): void {
  }

  toggleTaskBar(){
  this.uiService.toggleAddTask();    
  }
}
