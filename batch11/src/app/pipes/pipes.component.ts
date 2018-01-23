import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  fname:string;
  today: any;
  num:number;


  constructor() {
    this.fname = 'qShOrE'
    this.today = new Date();
    this.num = 23;
  }

  ngOnInit() {
  }

}
