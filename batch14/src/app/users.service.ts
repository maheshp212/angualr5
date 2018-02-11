import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {
  constructor(private http:Http) { }
  listUsers(){
    return this.http.get('http://api.qshore.com/users')
    .map((resp:Response)=>{
        return resp.json();
    })
  }

  viewUser(id){
    var url =  "http://api.qshore.com/view-user/"+id;
    return this.http.get(url)
    .map((resp:Response)=>{
        return resp.json();
    })
  }

  createUser(){
    var url =  "http://api.qshore.com/add-user";
      var data =
      {
        fname: 'Mohan',
        lname:'Lal',
        age:23,
        email:'mohanlal@123',
        password:'lal123',
      }
    return this.http.post(url,data)
    .map((resp:Response)=>{
        return resp.json();
    })
  }

   editUser(id){
    var url =  "http://api.qshore.com/edit-user/"+id;
      var data =
      {
        fname: 'Mohan updated',
        lname:'Lal updated',
        age:23,
        email:'mohanlal@123456',
        password:'lal123',
      }
    return this.http.put(url,data)
    .map((resp:Response)=>{
        return resp.json();
    })
  }


  deleteUser(id){
    var url =  "http://api.qshore.com/delete-user/"+id;
    return this.http.delete(url)
    .map((resp:Response)=>{
        return resp.json();
    })
  }
}
