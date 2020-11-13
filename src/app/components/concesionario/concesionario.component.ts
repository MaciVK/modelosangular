import { Component, OnInit, Input } from '@angular/core';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css'],
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>;
  constructor() {
    this.coches = [
      new Coche('Pontiac', 'Firebird', 0, 320, 30, false),
      new Coche('Dodge', 'Challenger', 0, 250, 40, false),
      new Coche('Ford', 'Mustang', 0, 380, 50, false),
    ];
  }

  ngOnInit(): void {}
}
