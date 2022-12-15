import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MegaMenuModule } from 'primeng/megamenu';
import {PickListModule} from 'primeng/picklist';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ImgComponent } from './components/img/img.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlideMenuModule } from 'primeng/slidemenu';
import {OrderListModule} from 'primeng/orderlist';

import {  PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

import { TieredMenuModule } from 'primeng/tieredmenu';
import {DataViewModule} from 'primeng/dataview';
import { HomeComponent } from './components/home/home.component';
import { CardModule, } from 'primeng/card';
import { UsersComponent } from './components/users/users.component';
import { ProductServicesService } from './services/product-services.service';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormUpdateComponent } from './components/form-product/form-update/form-update.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [

    AppComponent,
    NavComponent,
    HomeComponent,
    UsersComponent,
    FormUpdateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    MegaMenuModule,
    HttpClientModule,
    FormsModule,
    OrderListModule,
    PanelMenuModule,
    PickListModule,
    VirtualScrollerModule,
    DropdownModule,
    RatingModule,
    TableModule,
    ButtonModule,
    SlideMenuModule,
    InputTextModule,
    MenubarModule,
    TieredMenuModule,
    DataViewModule,
    CardModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  OrderListModule,
  SweetAlert2Module.forChild()
  ],
  providers: [ProductServicesService,SweetAlert2Module],
  bootstrap: [AppComponent]
})
export class AppModule { }
