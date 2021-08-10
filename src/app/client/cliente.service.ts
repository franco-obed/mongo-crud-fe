import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }



  getClients(): Observable<any> {
    return this.http.get("http://localhost:3000/clientes");
  }



  createClient(cliente: any): Observable<any> {
    return this.http.post('http://localhost:3000/cliente', cliente);
  }


}
