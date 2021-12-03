import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {
  public cliente: Cliente = new Cliente();

  constructor(private clienteServ: ClientesService, private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rotaAtiva.params.subscribe((parametros)=>{
      const id: number = Number(parametros['id']);

      this.clienteServ.getById(id).subscribe((cliente: Cliente)=>{
        this.cliente = cliente;
      });
    });

    /*
    const id: number = Number( this.rotaAtiva.snapshot.paramMap.get('id') );

    this.clienteServ.getById(id).subscribe((cliente: Cliente)=>{
      this.cliente = cliente;
    });
    */
  }

}
