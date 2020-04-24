import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl/';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  state: Observable<object>;

  map: Mapboxgl.Map;
  stores: any;
  marker: Mapboxgl.Marker
  loja: any

  get latitude() { return this.loja.coordenadas.latitude }
  get longitude() { return this.loja.coordenadas.longitude }

  constructor(private activatedRoute: ActivatedRoute) {
    this.loja = {
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
      }
    } 

  }

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.longitude, this.latitude],
      zoom: 12.5
    });

    this.criarMarcador(this.longitude, this.latitude)

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
