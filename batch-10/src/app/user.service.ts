import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  listUsers(){
    var  url = 'http://api.qshore.com/users';
    var list =   this.http.get(url)
    .map((response:Response) => {
        //console.log(response);
        return response.json();
    });
    return list;
  }

  createUser(){
    var url = 'http://api.qshore.com/add-user'
    var data = {
        fname: 'Mohan',
        lname:'Lal',
        age:23,
        email:'mohanlal@123',
        password:'lal123'
    }
     var list =   this.http.post(url,data)
      .map((response:Response) => {
          return response.json();
      });

    return list;


  }


}
