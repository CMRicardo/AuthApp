import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  public myForm: FormGroup = this.formBuilder.group({
    email: ['ricardo@google.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        console.log('Todo bien!');
      },
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
