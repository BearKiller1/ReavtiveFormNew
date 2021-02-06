import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  users = [
    {username:'12', pwd:'12'}
  ];
  
  constructor() { }

  login(user:any): any{
    for(var i = 0; i!= this.users.length; i++){
      if(user.username == this.users[i]['username'] && user.password == this.users[i]['pwd'])
        return true;
      else
        return false;
    }
  };


}
