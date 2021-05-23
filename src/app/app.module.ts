import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedProductsComponent,
    SocialFeedComponent,
    OurPartnersComponent,
    OurProductsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
