import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuarioForm: FormGroup;
  formSubmitted = signal(false);

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    this.formSubmitted.set(true);
    
    if (this.usuarioForm.valid) {
      console.log('Formulario válido:', this.usuarioForm.value);
      // Aquí puedes enviar los datos a tu API
    }
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
