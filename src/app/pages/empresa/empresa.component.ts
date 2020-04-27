import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl/';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  state: Observable<object>;
  formLoja: FormGroup

  map: Mapboxgl.Map;
  stores: any;
  marker: Mapboxgl.Marker

  get latitude() { return this.formLoja.get('latitude').value }
  get longitude() { return this.formLoja.get('longitude').value }

  constructor(private router: Router) {
    this.formLoja = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cashback: new FormControl('', [Validators.required]),
      tipoServico: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      descricao: new FormControl(''),
      latitude: new FormControl(null),
      longitude: new FormControl(null),
    });
  }

  ngOnInit() {
    this.getDadosLoja();
    (Mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.longitude, this.latitude],
      zoom: 12.5
    });

    this.criarMarcador(this.longitude, this.latitude)

  }

  exemplarNovaLoja(): object {
    return {
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
    }
  }

  getDadosLoja() {

    const loja = history.state.id_loja ? history.state : this.exemplarNovaLoja()
    this.formLoja.get('nome').setValue(loja.nome)
    this.formLoja.get('cashback').setValue(loja.cashback || 0)
    this.formLoja.get('tipoServico').setValue(loja.tipoServico)
    this.formLoja.get('cidade').setValue(loja.endereco.cidade)
    this.formLoja.get('estado').setValue(loja.endereco.estado)
    this.formLoja.get('endereco').setValue(loja.endereco.rua)
    this.formLoja.get('descricao').setValue(loja.descricao)
    this.formLoja.get('latitude').setValue(loja.coordenadas.latitude)
    this.formLoja.get('longitude').setValue(loja.coordenadas.longitude)
  }

  criarMarcador(lgn: number, lat: number) {
    this.marker = new Mapboxgl.Marker({
      draggable: true
    }).setLngLat([lgn, lat])
      .addTo( this.map );

    this.marker.on('dragend', () => {
      this.checarPosicao(this.marker)
    })

  }

  checarPosicao(marker: Mapboxgl.Marker){
    console.log(this.marker.getLngLat())
  }


}
