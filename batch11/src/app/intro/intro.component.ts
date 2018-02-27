import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
login:any;
  constructor() { }

  ngOnInit() {
  }

  loginSubmit(){
    alert('form got submitted!!!!!!!!!!!1');
    console.log(this.login);
  }

}
