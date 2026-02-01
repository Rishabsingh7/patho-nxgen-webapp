import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  showRegister = false;

  loginForm!: FormGroup; // initialize later in ngOnInit

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  submitLogin() {
    if (this.loginForm.valid) {
      alert('Login successful');
      this.close.emit();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  openRegister() {
    this.showRegister = true;
  }

  backToLogin() {
    this.showRegister = false;
  }
}
