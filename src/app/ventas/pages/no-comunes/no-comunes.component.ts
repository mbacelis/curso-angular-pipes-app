import { Component, } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = "Mauricio";
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona() {
    if (this.genero == "masculino") {
      this.nombre = "Natalia";
      this.genero = 'femenino';
    }
    else {
      this.nombre = "Mauricio";
      this.genero = 'masculino';
    }
  }

  // i18nPlural
  // clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  // clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientes: string[] = [];
  clientesMapa = {
     '=0': 'no tenemos ningún cliente esperando',
     '=1': 'tenemos un cliente esperando',
     'other': `tenemos # clientes esperando`
  }

  borrarCliente() {
    if (this.clientes.length > 0) {
      this.clientes.pop();
    }
  }
  agregarCliente() {
    this.clientes.push(`cliente${this.clientes.length + 1}`);
  }
}
