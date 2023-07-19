import { Injectable } from '@angular/core';
import { users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor() { }
  public userName = '';
  usersList: users[] =[
    {
      userName: 'Anu',
      password: 'Password1'
    },{
      userName: 'Ramya',
      password: 'Password1'
    },{
      userName: 'Swetha',
      password: 'Password1'
    },{
      userName: 'Sudha',
      password: 'Password1'
    }
  ]
  authenticate(data: any){  
    if(data.value.userName && data.value.password){
      let index;
      for(index=0; index < this.usersList.length; index++){
        if(this.usersList[index].userName == data.value.userName &&  
          this.usersList[index].password == data.value.password){
            this.userName = this.usersList[index].userName;
            return true;
          } 
      }
      return false;
    }else{
      return false;
    }
  }
  getLoggedInUser(): string{
    return this.userName;
  }
}
