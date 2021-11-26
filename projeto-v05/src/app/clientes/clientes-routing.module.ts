import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteGuardService } from 'src/app/auth/cliente-guard.service';

import { ClientesComponent } from './clientes.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { ClienteDetalhesComponent } from './cliente-detalhes/cliente-detalhes.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    // canActivateChild: [ClienteGuardService],
    children: [
      {
        path: 'novo',
        component: ClienteNovoComponent
      },
      {
        path: ':id',
        component: ClienteDetalhesComponent
      },
      {
        path: ':id/update',
        component: ClienteUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}
