import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { USERS } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
person = USERS
  constructor(public api:ApiServiceService) { }



  ngOnInit(): void {
  }

}
