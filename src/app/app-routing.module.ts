import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './containers/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsereditComponent } from './components/useredit/useredit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'users/:id', component:ProfileComponent},
  {path:'users/:id/useredit', component:UsereditComponent},

  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page,
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
