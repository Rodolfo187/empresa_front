import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './formularios/usuario/usuario.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hola';
}
