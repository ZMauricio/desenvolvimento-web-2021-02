import { Component, OnInit } from '@angular/core';

import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[] = [];

  constructor(private clientesServ: ClientesService) {

    this.clientesServ.isClientesUpdate.subscribe((mensagem)=>{
      if (mensagem) {
        this.carregarDados();
      }
    });

  }

  ngOnInit(): void {
    this.carregarDados();
  }

  public carregarDados() {
    this.clientesServ.getAll().subscribe((clientes: Cliente[])=>{
      this.clientes = clientes;
    });
  }

}
