import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  titulo = 'Buenos días';
  mensaje = 'Que tengas un excelente día';
  //horaActual = new Date().getHours();
}
