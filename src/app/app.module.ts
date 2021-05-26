import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { NewProductComponent } from './components/dashboard/new-product/new-product.component';
import { EditProductComponent } from './components/dashboard/edit-product/edit-product.component';

import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    SliderComponent,
    FeaturedProductsComponent,
    SocialFeedComponent,
    OurPartnersComponent,
    OurProductsComponent,
    MenuComponent,
    DashboardHomeComponent,
    NewProductComponent,
    EditProductComponent,
    
  ],
  imports: [
  
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  providers: [
    ProductsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
