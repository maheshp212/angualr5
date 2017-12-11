import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  fname:string = 'qShORe';
  today:any = new Date();
  age:number = 35;
  constructor() { }

  ngOnInit() {
  }
}
