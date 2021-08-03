import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  films:any=[];
  currentRate = 8;


  constructor(private api: ApiServiceService, private router: ActivatedRoute ) { }

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const productIdFromRoute = (routeParams.get('id'))
    this.api.getDetail(productIdFromRoute).subscribe(
      (response: any) => {
        this.films = response;
        console.log(this.films);
      }
    )
  }

}
