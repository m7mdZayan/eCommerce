import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { NewProductComponent } from './components/dashboard/new-product/new-product.component';
import { EditProductComponent } from './components/dashboard/edit-product/edit-product.component';


const routes: Routes = [
  {path: 'dashboard/products', component: DashboardHomeComponent},
  {path: 'dashboard/products/new', component: NewProductComponent },
  {path: 'dashboard/products/:id/edit', component:EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  


  exports: [RouterModule]
})
export class AppRoutingModule { }
