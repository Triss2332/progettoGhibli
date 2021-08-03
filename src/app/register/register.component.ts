import { Component, NgModule, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user={
    'email': "",
    'password':"",
    'firstName': "",
    'lastName':"",
    'gender': ""

  }
  constructor(private api:ApiServiceService) { }

  register(){
    this.api.saveUser(this.user);
  }

  ngOnInit(): void {
  }

}
