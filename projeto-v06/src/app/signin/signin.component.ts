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
  public usuario: Usuario = new Usuario();

  public usuarioForm!: FormGroup;

  public promocoesLista: any[] = [
    {
      id: 1,
      nome: 'Cupons de desconto',
      value: 'cupons',
      checked: false
    },
    {
      id: 2,
      nome: 'Frutas do cerrado',
      value: 'frutas',
      checked: false
    },
    {
      id: 3,
      nome: 'Produtos veganos',
      value: 'vegano',
      checked: false
    }
  ];



  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['',  Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(150)
                  ])
      ],
      email: [ '', Validators.compose([Validators.required, Validators.email])],
      senha: [ '', Validators.compose([Validators.required, Validators.minLength(6)]) ],
      cidade: [ '', Validators.required],
      idade: [ '0', Validators.compose([Validators.required, Validators.min(0)]) ],
      genero: ['', Validators.required],
      promocoes: this.formBuilder.array([], Validators.required)
    });

    this.onLoadCheckbox();
  }

  public onLoadCheckbox() {
    const promocoesRef: FormArray = this.usuarioForm.get('promocoes') as FormArray;
    this.promocoesLista.forEach((item)=> {
      this.updateCheckControl(promocoesRef, item);
    });
  }

  public onChangeCheckbox(event: any, indice: number) {
    const promocoesRef: FormArray = this.usuarioForm.get('promocoes') as FormArray;

    this.promocoesLista[indice].checked = event.target.checked;

    this.updateCheckControl(promocoesRef, event.target);
  }

  public updateCheckControl(promocoesRef: FormArray, checkboxInput: any) {
    if (checkboxInput.checked) {
      promocoesRef.push( new FormControl(checkboxInput.value) );
    } else {
      promocoesRef.controls.forEach((item, index)=>{
        if (item instanceof FormControl) {
          if (item.value === checkboxInput.value) {
            promocoesRef.removeAt(index);
          }
        }
      });
    }
  }

  public submit() {

    // console.log(this.usuarioForm);
    console.log(this.usuarioForm.value);

    if (!this.usuarioForm.pending && this.usuarioForm.valid) {
      console.log('Os dados do usuário podem ser enviados!');

      this.usuarioService.add(this.usuario).subscribe((resposta: any)=>{
        console.log(resposta);

        this.router.navigate(['/login']);
      });

    } else {
      console.log('O formulário não está pronto!');
    }




  }

}
