import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  titulo = 'Ejercicio Practico';
  mensaje = 'Rodolfo Yamaca';
  //horaActual = new Date().getHours();
}
