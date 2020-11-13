import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../../models/comic';
import { ComicComponent } from './../comic/comic.component';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  public arrayComics: Array<Comic>;
  public favorito: Comic;
  constructor() {
    this.arrayComics = [
      new Comic(
        'Spiderman',
        'https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg',
        'Hombre araña'
      ),
      new Comic(
        'Wolverine',
        'https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg',
        'Lobezno'
      ),
      new Comic(
        'Guardianes de la Galaxia',
        'https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg',
        'Yo soy Groot'
      ),
    ];
  }
  recibirFavorito(event) {
    var indice = parseInt(event);
    this.favorito = this.arrayComics[indice];
    console.log(indice);
  }
  eliminarComic(event) {
    var indice = parseInt(event);
    this.arrayComics.splice(indice, 1);
  }

  ngOnInit(): void {}
}
