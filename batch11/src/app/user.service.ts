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
      console.log('########');
      console.log(res);
      console.log('**********')
      return res;
    })
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
