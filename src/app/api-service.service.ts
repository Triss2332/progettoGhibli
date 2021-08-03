import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { USERS } from './user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  private apipath = 'https://ghibliapi.herokuapp.com/films/'
  public images = './assets/images/cards/';
  public users = USERS;
  lastId=1;

  constructor(private http: HttpClient, private router: Router) { }

  //funzioni
  getFilm() {
    return this.http.get(this.apipath).pipe(catchError(this.handleError))
  }

  private handleError(error: any) {
    if (error.status === 0) {
      console.log(`an error occurred: `, error.error);
    } else {
      console.log(
        `Backend returned coode ${error.stutus}, ` +
        `message was ${error.message}`
      );
    }
    return throwError(
      'Something bad happened; please try again later'
    )

  }

  getDetail(id) {
    return this.http.get(this.apipath + id)
  }

  saveUser(user){
    this.lastId +=1;
    user.id = this.lastId;
    this.users.push(user);
    this.router.navigate(['/login'])
  }


}
