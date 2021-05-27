import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsereditComponent } from './components/useredit/useredit.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { ErrorComponent } from './components/error/error.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrdersService } from './services/orders.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

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
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProfileComponent,
    UsereditComponent,
    UsercardComponent,
    ErrorComponent,
    ShoppingCartComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent],
})
export class AppModule {}

