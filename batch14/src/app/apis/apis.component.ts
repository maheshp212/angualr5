import { Component, OnInit } from '@angular/core';
import {UsersService} from  './../users.service'

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {
  listUsers:any;
  userInfo:any;
  constructor(private user:UsersService) { }

  ngOnInit() {

    this.user.listUsers()
    .subscribe(res=>{
//      console.log('####');
//      console.log(res);

      this.listUsers = res.data;
    })
  }

  viewUser(id){
    this.user.viewUser(id)
    .subscribe(res => {
      this.userInfo = res.data;
    })

  }
  createUser(){
    this.user.createUser()
    .subscribe(res => {
      this.userInfo = res.data;

        this.user.listUsers()
        .subscribe(res=>{
          this.listUsers = res.data;
        })
    })
  }

  editUser(id){
    this.user.editUser(id)
    .subscribe(res => {
      this.userInfo = res.data;

        this.user.listUsers()
        .subscribe(res=>{
          this.listUsers = res.data;
        })
    })
  }


  deleteUser(id){
    this.user.deleteUser(id)
    .subscribe(res => {
      this.userInfo = res.data;

        this.user.listUsers()
        .subscribe(res=>{
          this.listUsers = res.data;
        })
    })
  }

}
