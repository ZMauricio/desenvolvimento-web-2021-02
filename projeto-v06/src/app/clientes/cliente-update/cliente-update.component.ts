import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  public cliente: Cliente = new Cliente();

  constructor(private clienteServ: ClientesService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router) { }

  ngOnInit(): void {
    const id = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
    this.clienteServ.getById(id).subscribe((cliente: Cliente)=>{
      this.cliente = cliente;
    });
  }

  public editar() {
    this.clienteServ.update(this.cliente).subscribe((resposta)=>{
      console.log(resposta);
      this.clienteServ.isClientesUpdate.emit(true);
    });
  }

  public deletar() {
    this.clienteServ.delete(this.cliente.id).subscribe((resposta)=>{
      console.log(resposta);

      this.clienteServ.isClientesUpdate.emit(true);

      this.rota.navigate(['/clientes']);
    });
  }
}
