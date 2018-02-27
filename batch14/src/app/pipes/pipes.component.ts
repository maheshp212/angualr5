import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  fname:string = 'qShOrE';
  age:number = 23;
  user:any = {name:'qhsore', tech:'angular js'};
  today:any = new Date();

  constructor() { }

  ngOnInit() {
  }

}
