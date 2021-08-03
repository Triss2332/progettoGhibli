import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServiceService } from './api-service.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAutenticated: boolean = false;
  

  constructor(private router:Router, private api:ApiServiceService) { }
  
  checkUser(user){
    let index= this.api.users.findIndex((value) =>{
      return value.email === user.email && value.password === user.password
    })
      if (index !== -1) return true;
      return false;
  }

  login(user){
    if(this.checkUser(user)){
    localStorage.setItem('token', '123456');
    this.isAutenticated = true;
    console.log(user)
    this.router.navigate(['/'])
  } else{
    alert('no no')
  }

}
  logout(){
    localStorage.removeItem('token')
    this.isAutenticated = false;
    this.router.navigate(['/'])
  }
}
