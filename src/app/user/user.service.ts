import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  // Método para solicitar al servidor, por el método get, los usuarios existentes
  getUsers() {


    this.http.get('http://127.0.0.1:3000/user').subscribe(data => {
      console.log(data);
    });


  };


}
