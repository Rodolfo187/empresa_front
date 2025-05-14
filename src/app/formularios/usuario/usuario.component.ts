import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioDto } from '../../modelos/usuario.dto';
import { UsuarioServicesService } from '../../servicios/usuario-services.service';
import { UsuarioTablaComponent } from '../../tablas/usuario-tabla/usuario-tabla.component';

@Component({
  selector: 'app-usuario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuarioForm: FormGroup;
  creado = signal(false);
  private usuarioService = inject(UsuarioServicesService);

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    
    if (this.usuarioForm.valid) {
      let usuario:UsuarioDto = this.usuarioForm.value;
      debugger
      this.usuarioService.enviarFormulario(usuario).subscribe(
        respon =>{
          this.creado.set(true);
          this.usuarioForm.reset();
          this.usuarioForm.clearValidators();
          this.ocultaAlerta();
        }
      );
    }
  }

  ocultaAlerta(){
    setTimeout(() => {
            this.creado.set(false);
          }, 3000);
  }

  // Bloquea teclas no numéricas
  filtroBloqueador(event: KeyboardEvent) {
    const filtro = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'
    ];

    if (!filtro.includes(event.key)) {
      event.preventDefault();
    }
  }

  // filtroBlanco(event: KeyboardEvent) {
  //   if (event.key === ' ') {
  //     event.preventDefault();
  //   }
  // }

  filtroBlanco(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    
    // Eliminar espacios al principio
    if (value.startsWith(' ')) {
      value = value.trimStart();
    }
    
    // Reemplazar más de 2 espacios consecutivos por 2 espacios
    value = value.replace(/\s{3,}/g, '  ');
    
    input.value = value;
    this.usuarioForm.get("nombre")?.setValue(value);
  }

  get nombre() {
    return this.usuarioForm.get('nombre');
  }

  get edad() {
    return this.usuarioForm.get('edad');
  }

  get email() {
    return this.usuarioForm.get('email');
  }

}
