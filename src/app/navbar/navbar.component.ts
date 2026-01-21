import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  activeLink = 'Home'; // Default active link
  scrolled = false;    // Track scroll position

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.menuOpen = false; // Close mobile menu on click
  }

  // Listen to window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50; // Add class after 50px scroll
  }
}
