import { Component, OnInit } from '@angular/core';

import {UserService} from './../user.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UserService],
})
export class ApisComponent implements OnInit {
  list:any;
  constructor(private user:UserService) { }

  ngOnInit() {

     this.user.listUsers()
      .subscribe((res) => {
        console.log(res);

        this.list = res;
      });
   // console.log(a);
  }

  callMe(){
    this.user.createUser()
    .subscribe(res=>{
      console.log(res);

        this.user.listUsers()
      .subscribe((res) => {
        console.log(res);

        this.list = res;
      });

    })
  }
}
