import { Routes } from '@angular/router';
import { UsuarioComponent } from './formularios/usuario/usuario.component';
import { UsuarioTablaComponent } from './tablas/usuario-tabla/usuario-tabla.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './home/inicio/inicio.component';

export const routes: Routes = [
    {path: 'formulario', component:UsuarioComponent},
    {path: "tabla-usuario", component:UsuarioTablaComponent},
    {path: "", component:  InicioComponent},
    {path: "**", redirectTo: "", pathMatch:"full"}

];
