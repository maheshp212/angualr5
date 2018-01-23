import { Component, OnInit } from '@angular/core';

import {UserService} from './../user.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UserService],
})
export class ApisComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {

    var a = this.user.listUsers();
    console.log(a);
  }

}
