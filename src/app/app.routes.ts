import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';
import { CancellationRefundComponent } from './pages/cancellation-refund/cancellation-refund.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'our-products', component: OurProductsComponent},
  { path: 'cancellation-refund', component: CancellationRefundComponent},
  { path: 'privacy-policy',component:PrivacyPolicyComponent},
  { path: '**', redirectTo: '' }
];
