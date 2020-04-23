import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerencial',
  templateUrl: './gerencial.component.html',
  styleUrls: ['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {
  lojas = []

  constructor() { }

  ngOnInit() {
    this.getEmpresas()
    console.log(this.lojas)
  }

  getEmpresas() {
    const id_empresa = 1;


    this.lojas = [
      {
        id_loja: 1, 
        nome: 'Empresa A', 
        endereco : {
          rua: 'Av. Sampaio Vidal nº200',
          cidade: 'Bauru',
          estado: 'São Paulo'
        },
        last_update: '10 dias atrás',
        coordenadas: {
          latitude: -22.2208,
          longitude: -49.9486
        },
      },
      {
        id_loja: 2, 
        nome: 'Empresa B', 
        endereco : {
          rua: 'Av. Joaquim da Fonseca nº1598',
          cidade: 'bauru',
          estado: 'São Paulo'
        },
        last_update: '10 dias atrás',
        coordenadas: {
          latitude: -22.303074,
          longitude: -49.065628
        },
      },
      {
        id_loja: 3, 
        nome: 'Empresa C', 
        endereco : {
          rua: 'Av. Teodoro Quintana nº2900',
          cidade: 'Gália',
          estado: 'São Paulo'
        },
        last_update: '11 dias atrás',
        coordenadas: {
          latitude:  -22.2914,
          longitude: -49.5559
        },
      },
      {
        id_loja: 4, 
        nome: 'Empresa D', 
        endereco : {
          rua: 'Av. Via Expressa nº180',
          cidade: 'Pompéia',
          estado: 'São Paulo'
        },
        last_update: '5 dias atrás',
        coordenadas: {
          latitude: -22.1065,
          longitude: -50.1747
        },
      },
    ]
     
  }

}
