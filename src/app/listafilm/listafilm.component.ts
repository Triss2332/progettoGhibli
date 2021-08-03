import { Router } from '@angular/router';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listafilm',
  templateUrl: './listafilm.component.html',
  styleUrls: ['./listafilm.component.css']
})

export class ListafilmComponent implements OnInit {
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
