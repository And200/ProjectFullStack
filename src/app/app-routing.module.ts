import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormUpdateComponent } from './components/form-product/form-update/form-update.component';
import { HomeComponent } from './components/home/home.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {
      path:'' ,redirectTo:'/home',pathMatch: 'full'
  },


  {
    path:'app-form-product',component:FormProductComponent
  },
  {
    path:'app-form-update/:id',component:FormUpdateComponent
  },


  {
    path:'app-product-category',component:ProductCategoryComponent
  },

  {
    path:'app-products',loadChildren:()=>import('./components/products/products-routing/products.module').then(m=>m.ProductsModule)
  },

  {
    path:'app-users',component:UsersComponent
  },
  {
    path:'home',component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
