import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ProdutosModule } from './produtos/produtos.module';



import { AppComponent } from './app.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PainelComponent } from './painel/painel.component';
import { ProdutoInfoComponent } from './produto-info/produto-info.component';

/**
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './produtos/produto-novo/produto-novo.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    OfertasComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SigninComponent,
    PainelComponent,
    ProdutoInfoComponent
    // ProdutoDetalhesComponent,
    // ProdutoNovoComponent,
    // ProdutoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProdutosModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
