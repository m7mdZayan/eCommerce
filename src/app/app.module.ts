import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ProfileComponent } from './components/profile/profile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { UsereditComponent } from './components/useredit/useredit.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    ProfileComponent,
    UsereditComponent,
    UsercardComponent,
    
  ],
  // MatExpansionModule
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NoopAnimationsModule,MatExpansionModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
