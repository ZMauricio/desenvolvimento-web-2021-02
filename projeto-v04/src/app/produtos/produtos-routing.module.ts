import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { ProdutoNovoComponent } from './novo/produto-novo.component';
import { ProdutoUpdateComponent } from './update/produto-update.component';
import { ProdutoDetalhesComponent } from './detalhes/produto-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent,
    children: [
      {
        path: 'novo',
        component: ProdutoNovoComponent
      },
      {
        path: 'update/:id',
        component: ProdutoUpdateComponent
      },
      {
        path: 'detalhes/:id',
        component: ProdutoDetalhesComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProdutosRoutingModule {}
