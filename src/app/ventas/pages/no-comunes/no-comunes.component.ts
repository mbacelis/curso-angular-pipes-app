import { Component, } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

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
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo'];
  // clientes: string[] = [];
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

  // KeyValue Pipe
  persona = {
    nombre: 'Mauricio',
    edad: 35,
    direccion: 'Chiapas, México'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => { 
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
  });
}
