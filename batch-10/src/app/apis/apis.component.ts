import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service'

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UserService]
})
export class ApisComponent implements OnInit {

settings = {
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  }
};

userSettings = {
  columns: {
    id: {
      title: 'ID'
    },
    fname: {
      title: 'Full Name'
    },
    password: {
      title: 'Password'
    },
    email: {
      title: 'Email'
    }
  }
};

data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },


  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];

  listUsers:any;
  createUser:any
  constructor(private users:UserService) { }

  ngOnInit() {

    this.users.listUsers()
    .subscribe( response => {
      //console.log(response);

      this.listUsers = response.data
    });
  }

  addUser(){
    this.users.createUser()
    .subscribe(result => {
      this.createUser = result;

      this.users.listUsers()
    .subscribe( response => {
      //console.log(response);

      this.listUsers = response.data
    });
    });
  }
}
