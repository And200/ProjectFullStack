import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MegaMenuModule } from 'primeng/megamenu';
import {PickListModule} from 'primeng/picklist';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlideMenuModule } from 'primeng/slidemenu';
import {OrderListModule} from 'primeng/orderlist';

import {  PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

import { TieredMenuModule } from 'primeng/tieredmenu';
import {DataViewModule} from 'primeng/dataview';
import { CardModule, } from 'primeng/card';
import { ProductServicesService } from './services/product-services.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { FileComponent } from './components/file/file.component';
@NgModule({
  declarations: [

    AppComponent,
    NotFoundComponent,
    FileComponent,
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
  SweetAlert2Module.forChild(),
  QuicklinkModule

  ],
  providers: [ProductServicesService,SweetAlert2Module

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
