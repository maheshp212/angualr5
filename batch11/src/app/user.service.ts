import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  listUsers(){
    var url = 'http://api.qshore.com/users';
    console.log(url);

    return this.http.get(url)
    .map((res:Response) => {
      return res.json();
    })
  }

  createUser(){
    var url = 'http://api.qshore.com/add-user'
      var data {
        fname: 'Mohan',
        lname:'Lal',
        age:23,
        email:'mohanlal@123',
        password:'lal123',
      };
    var result = this.http.post(url, data)
    .map((response:Response) =>{
      return response.json();
    });

    return result;
  }

}

/*
function callMe(){

}

var callMe = function(){

}

//anonymous functions new syntax
(param1, param2 , param3 )=>{ }

//anonymous function with single param and single line of code
a => console.log(a);
*/
