import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public usuarioForm: FormGroup;

  public promocoesLista: any[] = [
    {
      id: 1,
      nome: 'Cupons de desconto',
      value: 'cupons',
      checked: false
    },
    {
      id: 2,
      nome: 'Produtos veganos',
      value: 'vegano',
      checked: false
    },
    {
      id: 3,
      nome: 'Frutas do cerrado',
      value: 'frutas',
      checked: false
    }
  ];


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.compose([ Validators.required,
                                      Validators.minLength(6),
                                      Validators.maxLength(150)])
            ],
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      idade: ['0', Validators.compose([Validators.required, Validators.min(0)]) ],
      genero: ['', Validators.required],
      cidade: ['', Validators.required],
      promocoes: this.formBuilder.array([], Validators.required)
    });
  }

  public onLoadCheckboxStatus() {
    const promocoesRef: FormArray = this.usuarioForm.get('promocoes') as FormArray;

    this.promocoesLista.forEach((item)=>{

      this.updateCheckControl(promocoesRef, item);
    });
  }

  public onSelectionChange(event, indice) {
    const promocoesRef: FormArray = this.usuarioForm.get('promocoes') as FormArray;
    this.promocoesLista[indice].checked = event.target.checked;

    this.updateCheckControl(promocoesRef, event.target);
  }

  public updateCheckControl(promocoesRef: FormArray, checkboxInput: any) {
    if (checkboxInput.checked) {
      promocoesRef.push( new FormControl(checkboxInput.value) );
    } else {
        promocoesRef.controls.forEach( (checkbox, index) => {
          if (checkbox instanceof FormControl) {
            if (checkbox.value === checkboxInput.value) {
              promocoesRef.removeAt(index);
            }
          }
        });
    }
  }

  public salvar() {
    let usuario = null;

    console.log(this.usuarioForm);

    console.log(this.usuarioForm.value);

    if (this.usuarioForm.valid) {

      /*
      usuario = new Usuario(
            0,
            this.usuarioForm.value.nome,
            this.usuarioForm.value.email,
            this.usuarioForm.value.senha,
            this.usuarioForm.value.idade,
            this.usuarioForm.value.cidade
      );
      */

      usuario = {
        id: 0,
        nome: this.usuarioForm.value.nome,
        email: this.usuarioForm.value.email,
        senha: this.usuarioForm.value.senha,
        idade: this.usuarioForm.value.idade,
        cidade: this.usuarioForm.value.cidade
      };


      this.usuariosService.add( usuario ).subscribe((resposta)=>{
        console.log(resposta);

        this.router.navigate(['/login']);
      });

    } else {
      console.log('O formulário não está pronto!');
    }




  }

}
