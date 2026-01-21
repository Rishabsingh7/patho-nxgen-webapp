import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css'],
  standalone: true,
  imports: [CommonModule, LoginComponent] // <-- Import LoginComponent here
})
export class OurProductsComponent {

  products = [
    { name: 'Path Lab', image: 'assets/path-lab.png' }
  ];

  showLoginForm = false;

  openLoginForm() {
    this.showLoginForm = true;
  }

  closeLoginForm() {
    this.showLoginForm = false;
  }
}
