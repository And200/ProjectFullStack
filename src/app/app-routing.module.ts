import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormUpdateComponent } from './components/form-product/form-update/form-update.component';
import { HomeComponent } from './components/home/home.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { DialogComponent } from './dialog/dialog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CustomPreloadService } from './services/custom-preload.service';
import{QuicklinkStrategy} from 'ngx-quicklink'
import { FileComponent } from './components/file/file.component';

const routes: Routes = [
  {
      path:'' ,redirectTo:'/home',pathMatch: 'full',data: {
        preload: true
      }
  },


  {
    path:'app-form-product',component:FormProductComponent
  },
  {
    path:'app-form-update/:id',component:FormUpdateComponent,data:{
      preload:true
    }
  },
  {
    path:'app-product-detail/:id',component:ProductDetailComponent,data:{
      preload:true
    }
  },
  {
    path:'app-file',component:FileComponent
  },

  {
    path:'app-product-category',component:ProductCategoryComponent,data:{
      preload:true
    }
  },

  {
    path:'app-products',loadChildren:()=>import('./components/products/products-routing/products.module').then(m=>m.ProductsModule),data:{
      preload:true
    }
  },


  {
    path:'home',component:HomeComponent,data:{
      preload:true
    }
  },
  {
    path:'cms',loadChildren:()=> import('./cms/cms.module').then(m=>m.CmsModule)
  },
  {
    path:'**', component:NotFoundComponent
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{
    preloadingStrategy:QuicklinkStrategy})],

    /*  Use Preload  Technique Just You Can't too many modules  */
  exports: [RouterModule]
})
export class AppRoutingModule { }
