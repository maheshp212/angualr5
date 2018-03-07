import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service'

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UserService]
})
export class ApisComponent implements OnInit {

  listUsers:any;
  userInfo:any;
  constructor(private user:UserService) { }

  ngOnInit() {

  	this.user.listUsers()
    .subscribe((response) => {
      this.listUsers = response.data;
    		console.log(response);
    	}
  	);
  }


  viewUser(uid){
    console.log(uid);
    this.user.viewUsers(uid)
    .subscribe((response) => {
      this.userInfo = response.data;
        console.log(response);
      }
    );
  }
  editUser(uid){
    this.user.editUser(uid)
      .subscribe((response) => {
        this.userInfo = response.data;
        
        // calling the list api to refresh the table
        this.user.listUsers()
        .subscribe((response) => {
          this.listUsers = response.data;
            console.log(response);
          }
        );
      }
    );
  }
  
  deleteUser(uid){
    this.user.deletUser(uid)
      .subscribe((response) => {
        this.userInfo = response.data;
        
        // calling the list api to refresh the table
        this.user.listUsers()
        .subscribe((response) => {
          this.listUsers = response.data;
            console.log(response);
          }
        );
      }
    );
  }

  createUser(){
    
     this.user.createUser()
      .subscribe((response) => {
        this.userInfo = response.data;
        
        // calling the list api to refresh the table
        this.user.listUsers()
        .subscribe((response) => {
          this.listUsers = response.data;
            console.log(response);
          }
        );
      }
    );
  }

}
