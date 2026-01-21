import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Emit event to parent to close popup
  @Output() close = new EventEmitter<void>();

  // Input fields
  userId: string = '';
  password: string = '';
  rememberMe: boolean = false;

  // Close the popup
  closePopup() {
    this.close.emit();
  }

  // Login function (you can add real auth here)
  login() {
    if (!this.userId || !this.password) {
      alert('Please enter User ID and Password');
      return;
    }

    console.log('Login Info:', {
      userId: this.userId,
      password: this.password,
      rememberMe: this.rememberMe
    });

    // For demo, just close popup after login
    alert(`Welcome, ${this.userId}!`);
    this.closePopup();
  }
}
