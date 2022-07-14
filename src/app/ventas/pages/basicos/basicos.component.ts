import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'mauricio'
  nombreUpper: string = 'MAURICIO';
  nombreCompleto = 'mAuricio BAceliS'

  fecha: Date = new Date(); //fecha el día de hoy

  constructor() { }

}
