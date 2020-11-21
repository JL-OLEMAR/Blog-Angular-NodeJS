import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {

  public peliculas: Pelicula[];

  constructor() {
    this.peliculas = [
      new Pelicula('Spiderman 4', 2019, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg'),
      new Pelicula('Los vengadores Endgame', 2014, 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/04/24/15561332489564.jpg'),
      new Pelicula('Batman vs Superman', 2019, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNDnTNhzurd4lDJyh1Q4p1s5HtQWoIjypxg&usqp=CAU')
    ];
  }

  holaMundo() {
    return 'Hola mundo desde un servicio de Angular !!!';
  }

  getPeliculas() {
    return this.peliculas;
  }

}





