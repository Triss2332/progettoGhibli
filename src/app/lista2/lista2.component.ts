import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';


@Component({
  selector: 'app-lista2',
  templateUrl: './lista2.component.html',
  styleUrls: ['./lista2.component.css']
})

export class Lista2Component implements OnInit {
  films: any = [];
  imagepath = this.api.images;
  currentRate = 10;
  errors:any;

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.api.getFilm().subscribe(
      (response: any) => {
        this.films = response
      },
      (error:any) => {
        console.log("Errore nel component" + error.message)
        this.errors = "Page Not Found";
        setTimeout(() => {this.router.navigate['/']}, 2000)
      }
    )
  }

}
