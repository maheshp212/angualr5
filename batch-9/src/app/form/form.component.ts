import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  count:number = 0;
  constructor() { }

  ngOnInit() {
  }

  callMe(){
    this.count++
    console.log(this.count);
  }
}
