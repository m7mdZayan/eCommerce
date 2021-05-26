import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://localhost:3000/api/users/:id';
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http:HttpClient) { }

  getUser(id:any){
    return this.http.get(this.apiUrl+"/"+id)
  } 

  getUserOrders(id:any, orderid:any){
    return this.http.get(this.apiUrl+"/"+id+"/"+orderid)
  } 

}

/**
 * 
  getAllUsers(){
    return this.myClient.get(this.baseURL);
    }
  
  getUserById(id:any){
    return this.myClient.get(this.baseURL+"/"+id)
  }

  AddNewUser(user:any){
    return this.myClient.post(this.baseURL, user);
  }

  DeleteUserById(id:any){
    return this.myClient.delete(this.baseURL+"/"+id);
  }

}
 */