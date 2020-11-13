import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-contadores',
  templateUrl: './padrecontadores.component.html',
  styleUrls: ['./padrecontadores.component.css'],
})
export class PadreContadoresComponent implements OnInit {
  public numeros: Array<number>;
  public mensaje: string;

  constructor() {
    this.numeros = [5, 432, 63, 12, 19];
  }

  //Necesitamos un metodo para recibir el ID del contador del hijo
  recibirIdContador($event) {
    //Usamos EVENT directamente porque vamos a recibir un numero (idContador)
    this.mensaje = 'Contador ' + $event + ' incrementando';
  }

  ngOnInit(): void {}
}
