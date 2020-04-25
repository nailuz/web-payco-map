import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mapa: Mapboxgl.Map


  constructor() { }

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-home',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-49.9486, -22.2208],
      zoom: 12.5
    })

    const geojson = this.getExampleGEOJson()
    geojson.features.forEach(loja => {
      const element = document.createElement('div');
      element.className = 'marker';
      new Mapboxgl.Marker(element)
        .setLngLat([loja.geometry.coordinates[0], loja.geometry.coordinates[1]])
        .addTo(this.mapa)
    })

  }


  getExampleGEOJson() {
    return {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-49.960609974915, -22.199090698363079]
        },
        properties: {
          id_loja: 1, 
          nome: 'Confiança Aquarius', 
          endereco : {
            rua: 'R. Dr. Thimo Bruno Belucci, 255',
            cidade: 'Marília',
            estado: 'São Paulo'
          },
          last_update: '10 dias atrás',
          coordenadas: {
            latitude: -22.199090698363079,
            longitude: -49.960609974915
          }
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-49.931175008782816, -22.226806200924756]
        },
        properties: {
          id_loja: 2, 
          nome: 'Confiança Esmeralda', 
          endereco : {
            rua: ' R. das Roseiras, 233 ',
            cidade: 'Marília',
            estado: 'São Paulo'
          },
          last_update: '10 dias atrás',
          coordenadas: {
            latitude: -22.226806200924756,
            longitude: -49.931175008782816
          }
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-49.9548132695982, -22.222795204323333]
        },
        properties: {
          id_loja: 3, 
          nome: 'Restaurante Tokyo', 
          endereco : {
            rua: 'Av. Rio Branco, 733',
            cidade: 'Marília',
            estado: 'São Paulo'
          },
          last_update: '11 dias atrás',
          coordenadas: {
            latitude:  -22.222795204323333,
            longitude: -49.9548132695982
          }
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-49.93549672551123, -22.20859491294381]
        },
        properties: {
          id_loja: 4, 
          nome: 'Via Bosque', 
          endereco : {
            rua: 'R. Amadeu Amarau, 8',
            cidade: 'Marília',
            estado: 'São Paulo'
          },
          last_update: '5 dias atrás',
          coordenadas: {
            latitude: -22.20859491294381,
            longitude: -49.93549672551123
          }
        }
      }]
    };
  }

}
