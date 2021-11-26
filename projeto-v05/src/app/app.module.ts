import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ProdutosModule } from './produtos/produtos.module';
import { ClientesModule } from './clientes/clientes.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './teste/teste.component';
import { SigninComponent } from './signin/signin.component';
import { PainelComponent } from './painel/painel.component';

// import { ProdutoDetalhesComponent } from './produtos/detalhes/produto-detalhes.component';
// import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
// import { ProdutoEditarComponent } from './produtos/editar/produto-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfertasComponent,
    HeaderComponent,
    LoginComponent,
    TesteComponent,
    SigninComponent,
    PainelComponent
    // ProdutoDetalhesComponent,
    // ProdutoNovoComponent,
    // ProdutoEditarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProdutosModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
