import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerencial',
  templateUrl: './gerencial.component.html',
  styleUrls: ['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {
  lojas = []

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    this.getEmpresas()
  }

  irParaLoja(loja: object): void {
    this.router.navigateByUrl('/empresas', { state: loja })
  }

  novaLoja(){
    this.lojas.push({
      nome: 'Nova Loja', 
      cashback: 0,
      tipoServico: 'Exemplo',
      descricao: 'Um texto longo',
      endereco : {
        rua: 'Rua',
        cidade: 'Cidade',
        estado: 'Estado'
      },
      last_update: '1 minuto atrás',
      coordenadas: {
        latitude: -22.2208,
        longitude: -49.9486
      },
    })
  }

  getEmpresas() {
    const id_empresa = 1;


    this.lojas = [
      {
        id_loja: 1, 
        nome: 'Confiança Aquarius', 
        cashback: 10,
        tipoServico: 'Supermercado',
        descricao: 'Rede de supermercados confiança, unidade aquarius.',
        endereco : {
          rua: 'R. Dr. Thimo Bruno Belucci, 255',
          cidade: 'Marília',
          estado: 'São Paulo'
        },
        last_update: '10 dias atrás',
        coordenadas: {
          latitude: -22.199090698363079,
          longitude: -49.960609974915
        },
      },
      {
        id_loja: 2, 
        nome: 'Confiança Esmeralda', 
        cashback: 10,
        tipoServico: 'Supermercado',
        descricao: 'Rede de supermercados confiança, unidade esmeralda.',
        endereco : {
          rua: ' R. das Roseiras, 233 ',
          cidade: 'Marília',
          estado: 'São Paulo'
        },
        last_update: '10 dias atrás',
        coordenadas: {
          latitude: -22.226806200924756,
          longitude: -49.931175008782816
        },
      },
      {
        id_loja: 3, 
        nome: 'Restaurante Tokyo', 
        cashback: 10,
        tipoServico: 'Restaurante',
        descricao: 'Comida japonesa.',
        endereco : {
          rua: 'Av. Rio Branco, 733',
          cidade: 'Marília',
          estado: 'São Paulo'
        },
        last_update: '11 dias atrás',
        coordenadas: {
          latitude:  -22.222795204323333,
          longitude: -49.9548132695982
        },
      },
      {
        id_loja: 4, 
        nome: 'Via Bosque', 
        cashback: 10,
        tipoServico: 'Lanchonete',
        descricao: 'Lanchonete de ambiente familiar',
        endereco : {
          rua: 'R. Amadeu Amarau, 8',
          cidade: 'Marília',
          estado: 'São Paulo'
        },
        last_update: '5 dias atrás',
        coordenadas: {
          latitude: -22.20859491294381,
          longitude: -49.93549672551123
        },
      },
    ]
     
  }

}
