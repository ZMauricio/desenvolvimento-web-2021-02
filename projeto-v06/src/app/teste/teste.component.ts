import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  public exibir: boolean = false;

  public alunosTemplate: any [] = [];

  public alunos: any[] = [
    {
      nome: 'Ana',
      curso: 'Ciência da Computação'
    },
    {
      nome: 'Paulo',
      curso: 'Nutrição'
    },
    {
      nome: 'João',
      curso: 'Ciência da Computação'
    },
    {
      nome: 'Luana',
      curso: 'Medicina'
    }
  ];

  public selecionado: string = 'Eletrônica';
  public cursos: string[] = ['Eletrônica', 'Informática', 'Mecânica', 'Funilaria'];

  constructor() {
    this.alunosTemplate = this.alunos;
  }

  ngOnInit(): void {
  }

  public mudar() {
    this.exibir = !this.exibir;
  }

  public filtrar() {
    this.alunosTemplate = [];

    for (let item of this.alunos) {
      if (item.curso !== 'Ciência da Computação') {
        this.alunosTemplate.push(item);
      }
    }
  }



}
