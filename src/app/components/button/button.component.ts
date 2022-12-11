import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  //the way to grab on to the props we passed in the tag i,e app-button

  @Input()
  text!: string;
  @Input()
  color!: string;
  @Input() value:boolean=false;
  
  @Output() btnClick = new EventEmitter();

  
  myFunc(){
    this.btnClick.emit();
 //    console.log('maaz');
 //kick start engine Lol => toggle,
 }
 

  constructor() { }

  ngOnInit(): void {
  }
 

}
