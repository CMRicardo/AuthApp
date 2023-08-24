import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  public myForm: FormGroup = this.formBuilder.group({
    email: ['daniel@google.com', [Validators.email, Validators.required]],
    name: ['Daniel', [Validators.required]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  register() {
    const { email, password, name } = this.myForm.value;

    this.authService.register({ email, password, name }).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
