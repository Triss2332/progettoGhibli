import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {
    'email': "",
    'password': "",
  }
  

  constructor(public authService: AuthService) { }
  
  login(){
    this.authService.login(this.user);
  }
  logout(){
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
