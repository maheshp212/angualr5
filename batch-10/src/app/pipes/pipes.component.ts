import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  age:number = 25;
  fname:string = 'QshOrE';
  today:any = new Date();
  user:any = {name:'qshore', exp:34, tech:'angularjs'};
  constructor() { }

  ngOnInit() {
  }

}
