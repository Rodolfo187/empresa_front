import { Component, inject, OnInit } from '@angular/core';
import { UsuarioDto } from '../../modelos/usuario.dto';
import { UsuarioServicesService } from '../../servicios/usuario-services.service';

@Component({
  selector: 'app-usuario-tabla',
  imports: [],
  templateUrl: './usuario-tabla.component.html',
  styleUrl: './usuario-tabla.component.css'
})
export class UsuarioTablaComponent implements OnInit{
  ngOnInit() {
    this.recuperarUsuarios();
  }

  usuarioServicio = inject(UsuarioServicesService);

  usuarios: UsuarioDto[] = [];

  usuarioSeleccionando: UsuarioDto | null = null;

  recuperarUsuarios(){
    this.usuarioServicio.recuperarUsuarios().subscribe(
      resp =>{
        this.usuarios = resp;
      }
    );
      
    
  }

  abrirModal(user: UsuarioDto): void {
    this.usuarioSeleccionando = user;
    // El modal se abre mediante data-bs-toggle en el template
  }

}
