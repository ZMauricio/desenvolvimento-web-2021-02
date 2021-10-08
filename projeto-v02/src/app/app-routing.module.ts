import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
import { ProdutoUpdateComponent } from 'src/app/produto-update/produto-update.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'produto-update/:id',
    component: ProdutoUpdateComponent
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
