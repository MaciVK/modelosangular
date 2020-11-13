import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
})
export class CocheComponent implements OnInit {
  @Input() car: Coche;
  // public car: Coche;
  public mensaje: string;

  constructor() {}
  //Cuando recibimos objetos, no se usa el Constructor
  ngOnInit(): void {
    this.comprobarEstado();
  }
  comprobarEstado() {
    if (!this.car.estado) {
      this.mensaje = 'El coche está apagado';
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = 'El coche está encendido';
      return true;
    }
  }

  encenderCoche() {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche() {
    if (this.comprobarEstado() == false) {
      alert('El coche no está encendido!!!');
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if (this.car.velocidad >= this.car.velmaxima) {
        this.car.velocidad = this.car.velmaxima;
      }
    }
  }
}
