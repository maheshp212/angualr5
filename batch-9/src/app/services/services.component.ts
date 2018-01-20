import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[UsersService]
})
export class ServicesComponent implements OnInit {
  listUsersobj:any;
  dataobj:any;

  constructor(private UsersService: UsersService) { }

  ngOnInit() {

    this.UsersService.listUsers()
    .subscribe((res) =>{
      this.listUsersobj = res.data;
      console.log('###################');
      console.log(res);
    });
  }

  createUser(){

    this.UsersService.createUser()
    .subscribe((res) =>{
        this.dataobj = res.data;
        console.log('***** create *******');
        console.log(this.dataobj);
        this.UsersService.listUsers()
            .subscribe((res) =>{
            this.listUsersobj = res.data;

        });
    });
  }

  updateUser(uid:number){
    this.UsersService.updateUser(uid)
    .subscribe((res) =>{
      this.dataobj = res.data;
      console.log('***** update *******')

      console.log(this.dataobj);
        this.UsersService.listUsers()
            .subscribe((res) =>{
            this.listUsersobj = res.data;
        });
    });
  }

  viewUser(uid:number){
    this.UsersService.viewUser(uid)
    .subscribe((res) =>{
      this.dataobj = res.data;
      console.log('***** view *******')
      console.log(this.dataobj);
    });
  }

  deleteUser(uid:number){
    this.UsersService.deleteUser(uid)
    .subscribe((res) =>{
      this.dataobj = res.data;
      console.log('***** delete *******')

      console.log(this.dataobj);
      this.UsersService.listUsers()
            .subscribe((res) =>{
            this.listUsersobj = res.data;
        });

    });
  }
}


