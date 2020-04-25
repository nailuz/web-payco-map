import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  formCadastro: FormGroup
  get form() { return this.formCadastro.value }
  constructor() {
    this.formCadastro = new FormGroup({
      email: new FormControl('', [Validators.email]),
      senha: new FormControl('', [Validators.minLength(6)]),
      nome: new FormControl('', [Validators.minLength(5)]),
      qtdeLojas: new FormControl('1')
    })
   }

  ngOnInit() {

  }

  registrar(){
    console.log(this.form)
  }

}
