import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public title: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.title = 'Componente peliculas';
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 10, 20);
  }

  ngOnInit(): void {
    console.log(this._peliculaService.holaMundo());
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }
}
