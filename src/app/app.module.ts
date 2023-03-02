import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ProductDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
