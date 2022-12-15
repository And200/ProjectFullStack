import { HttpClient } from '@angular/common/http';
import { Component, OnInit,EventEmitter,Output ,Input, ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';

import { Product } from 'src/app/models/product.model';
import { ProductServicesService } from 'src/app/services/product-services.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],

})
export class ProductComponent implements OnInit {


  @Input() productStore: Product[]=[];
   label: string='product';
  criter:string='';
  quantity!:number;
  classStyle='button is-info';

  @Output()deleteProductEvent= new  EventEmitter<number>();

  constructor(private readonly router:Router ,  private readonly productService:ProductServicesService,private readonly http:HttpClient
    ) {

  }

  ngOnInit(): void {

  }



    deleteProduct(id:number){
      this.deleteProductEvent.emit(id);
   }







   getTotalPrice() {
     return this.productService.getTotal(this.productStore)

   }






}
