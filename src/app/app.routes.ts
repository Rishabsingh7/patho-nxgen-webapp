import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'our-products', component: OurProductsComponent},
  { path: '**', redirectTo: '' }
];
