import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { MainLayoutComponent } from './shared/layouts/mainLayout/mainLayout.component'
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/shop/home/home.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { CartPageComponent } from './pages/shop/cart-page/cart-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NavItemComponent } from './shared/components/nav-item/nav-item.component';
import { ProductDetailPageComponent } from './pages/shop/product-detail-page/product-detail-page.component';
import { LoginPageComponent } from './pages/shop/login-page/login-page.component';
import { RegisterPageComponent } from './pages/shop/register-page/register-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductPageComponent } from './pages/shop/product-page/product-page.component';
import { ProductScrollerComponent } from './shared/components/product-scroller/product-scroller.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { SublevelMenuComponent } from './shared/components/sidenav/sublevel-menu.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent,
    HomeComponent,
    ProductCardComponent,
    CartPageComponent,
    DashboardComponent,
    NavItemComponent,
    ProductDetailPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FooterComponent,
    ProductPageComponent,
    ProductScrollerComponent,
    SidenavComponent,
    SublevelMenuComponent,
    AdminLayoutComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
