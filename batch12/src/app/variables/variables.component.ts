import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  fname:string = 'qshores';
  lname:string = 'tech';

  age:number = 23;
  age2:number = 23;
  intrest:null = null;
  gnder:boolean = true;

  fruits:string[] = ['kiwi', 'orange', ' melon'];

  user:any = {name:'angualarjs', exp:5};
  undf:any;

}
