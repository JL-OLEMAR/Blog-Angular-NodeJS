import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';


@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public title: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor() {
    this.title = 'Componente peliculas';
    this.peliculas = [
      new Pelicula('Spiderman 4', 2019, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg'),
      new Pelicula('Los vengadores Endgame', 2014, 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/04/24/15561332489564.jpg'),
      new Pelicula('Batman vs Superman', 2019, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNDnTNhzurd4lDJyh1Q4p1s5HtQWoIjypxg&usqp=CAU')
    ];
    this.fecha = new Date(2020, 10, 20);
  }

  ngOnInit(): void {
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }
}
