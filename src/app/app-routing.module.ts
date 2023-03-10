import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/mainLayout/mainLayout.component'
import { HomeComponent } from './pages/shop/home/home.component';
import { CartPageComponent } from './pages/shop/cart-page/cart-page.component';
import { ProductDetailPageComponent } from './pages/shop/product-detail-page/product-detail-page.component';
import { LoginPageComponent } from './pages/shop/login-page/login-page.component';
import { RegisterPageComponent } from './pages/shop/register-page/register-page.component';

const routes: Routes = [{
  path: '',
  component: MainLayoutComponent,
  children: [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailPageComponent
  },
  {
    path:'cart',
    component: CartPageComponent,
  },
  {
    path:'login',
    component: LoginPageComponent,
  },
  {
    path:'register',
    component: RegisterPageComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
