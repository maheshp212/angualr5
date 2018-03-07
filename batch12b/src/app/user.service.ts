import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }
  
  listUsers(){

  	return this.http.get('http://api.qshore.com/users')
  	.map((res:Response)=>{
  		return res.json();
  	})
  }

  viewUsers(uid){
  	return this.http.get('http://api.qshore.com/view-user/'+uid)
  	.map((res:Response)=>{
  		return res.json();
  	})
  }

  createUser(){
  	let user = {
  		fname: 'Mohan',
		lname:'Lal',
		age:23,
		email:'mohanlal@123',
		password:'lal123'
  	} 
  	return this.http.post('http://api.qshore.com/add-user', user)
  	.map((res:Response)=>{
  		return res.json();
  	})
  }


  editUser(id){
  	let url = 'http://api.qshore.com/edit-user/' + id
  	let user = {
  		fname: 'Mohan updated',
		lname:'Lal',
		age:23,
		email:'mohanlal@123',
		password:'lal123'
  	} 
  	return this.http.put(url, user)
  	.map((res:Response)=>{
  		return res.json();
  	})

  }

  deletUser(userId){

  	let url = 'http://api.qshore.com/delete-user/' + userId
  	
  	return this.http.delete(url)
  	.map((res:Response)=>{
  		return res.json();
  	})

  }
}
