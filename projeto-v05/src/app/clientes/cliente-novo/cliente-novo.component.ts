import { Component, OnInit } from '@angular/core';

import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit {
  public cliente: Cliente = new Cliente();

  constructor(private clienteServ: ClientesService) { }

  ngOnInit(): void {
  }

  public cadastrar() {
    this.clienteServ.add(this.cliente).subscribe((cliente: Cliente)=>{
      console.log(cliente);

      this.clienteServ.isClientesUpdate.emit(true);

    });
  }
}
