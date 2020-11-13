import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from './../../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent implements OnInit {
  // @Input() titulo: string;
  // @Input() srcimagen: string;
  // @Input() descripcion: string;
  @Input() comic: Comic;
  @Input() index: number;

  @Output() seleccionarFavorito = new EventEmitter();
  @Output() eliminar = new EventEmitter();

  enviarFavorito() {
    this.seleccionarFavorito.emit(this.index);
  }
  deleteComic() {
    this.eliminar.emit(this.index);
  }

  constructor() {}

  ngOnInit(): void {}
}
