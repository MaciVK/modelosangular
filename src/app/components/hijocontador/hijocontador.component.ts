import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-contador',
  templateUrl: './hijocontador.component.html',
  styleUrls: ['./hijocontador.component.css'],
})
export class HijoContadorComponent implements OnInit {
  //Ya que son datos entrantes, se declaran con @Input (con su import arriba)
  @Input() inicio: number;
  @Input() idContador: number;
  //Declaramos un metodo para poder devolver info al padre
  //se Emite el evento, y se captura como argumento de entrada en el metodo del padre
  //Asi que hay que importarlo tambien
  @Output() enviarIdContador = new EventEmitter();
  //Variable para saber el numero del contador. Interna
  public numero: number;
  public mensaje: string;

  //Realizamos la llamada al padre cuando deseemos,
  //El metodo de llamada del hijo tambien tiene que recibir event AUNQUE no se use
  incrementarContador(event) {
    this.numero += 1;
    this.mensaje =
      'Contador ' + this.idContador + ' en el numero ' + this.numero;
    //LLAMAMOS AL PAPA
    this.enviarIdContador.emit(this.idContador);
  }

  constructor() {}

  ngOnInit(): void {
    //El padre nos dice el inicio y el idContador
    this.numero = this.inicio;
    this.mensaje = 'Contador ' + this.idContador + ' empieza en ' + this.inicio;
  }
}
