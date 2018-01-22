import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formscont',
  templateUrl: './formscont.component.html',
  styleUrls: ['./formscont.component.css']
})
export class FormscontComponent implements OnInit {

  login:any = {};
  constructor() { }

  ngOnInit() {
  }

  loginSubmit(){
    alert('form got submitted');
    console.log(this.login);
  }

  invoke(){
    alert('from forms cont');
  }
}
