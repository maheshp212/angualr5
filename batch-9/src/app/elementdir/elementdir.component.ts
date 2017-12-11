import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-elementdir',
  templateUrl: './elementdir.component.html',
  styleUrls: ['./elementdir.component.css']
})
export class ElementdirComponent implements OnInit {

  @Input() names;
  name:string;
  constructor() { }

  ngOnInit() {
    this.name = this.names;
  }

}
