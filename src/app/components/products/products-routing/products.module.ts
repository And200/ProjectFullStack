import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModuleRouting } from './products-routing.module';
import { ProductsComponent } from '../products.component';
import { ProductComponent } from '../../product/product.component';
import { ImgComponent } from '../../img/img.component';
import { PipefilterPipe } from 'src/app/pipes/pipefilter.pipe';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormProductComponent } from '../../form-product/form-product.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderListModule } from 'primeng/orderlist';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProductCategoryComponent } from '../../product-category/product-category.component';
import { ProductDetailComponent } from 'src/app/pages/product-detail/product-detail.component';
import { SwiperModule } from 'swiper/angular';
import { ImgCartComponent } from '../../img/img-cart/img-cart.component';

@NgModule({
  declarations: [ProductsComponent,ImgComponent,PipefilterPipe,ProductComponent,
    FormProductComponent,ProductCategoryComponent, ProductDetailComponent,ImgCartComponent
  ],
  imports: [
    CommonModule,
    ProductsModuleRouting,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderListModule,
    SweetAlert2Module.forChild(),
    SwiperModule



  ]
})
export class ProductsModule { }
