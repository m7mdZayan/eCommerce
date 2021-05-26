import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  {path:'users/:id', component:ProfileComponent},
  {path:'home', component:HomeComponent},
  {path:'users/:id/useredit', component:UsereditComponent},
  // {path:'users/:id/:editid', component:ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const RoutingComp =[ HomeComponent, ProfileComponent]

