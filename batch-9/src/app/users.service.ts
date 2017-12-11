import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private htttp:Http) { }

  listUsers():any{
      var url = 'http://api.qshore.com/users'
      var list = this.htttp.get(url)
        .map((response:Response) => {
            return response.json();
        })
      return list;
  }

  createUser():any{
    console.log('create user')
      var user = {
        fname: 'Mohan',
        lname:'Lal',
        age:23,
        email:'mohanlal@123',
        password:'lal123',
      }
      var url = 'http://api.qshore.com/add-user'
      var list = this.htttp.post(url, user)
        .map((response:Response) => {
            return response.json();
        })
      return list;
  }

  updateUser(uid:number):any{
    var user = {
        fname: 'Mohan udate',
        lname:'Lal',
        age:23,
        email:'mohanlal@123',
        password:'lal123',
      }
      var url = 'http://api.qshore.com/edit-user/'+uid;
      var list = this.htttp.put(url, user)
        .map((response:Response) => {
            return response.json();
        })
      return list;
  }

  viewUser(uid:number):any{
      var url = 'http://api.qshore.com/view-user/'+uid;
      var list = this.htttp.get(url)
        .map((response:Response) => {
            return response.json();
        })
      return list;
  }

  deleteUser(uid:number):any{
      var url = 'http://api.qshore.com/delete-user/'+uid;
      var list = this.htttp.delete(url)
        .map((response:Response) => {
            return response.json();
        })
      return list;
  }
}
