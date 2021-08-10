import { Component, OnInit } from '@angular/core';
import { Client } from './models/client';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  // Delcaración de los objetos requeridos en este componente
  client: Client = new Client();
  clientArray: Client[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {


  }


  add() {

    // Se agrega el nuevo elemento al arreglo
    this.client.id = this.clientArray.length + 1;
    this.clientArray.push(this.client);


    // Logger a consola
    console.log(this.client);
    console.log(this.clientArray);
    this.client = new Client();

  }

}
