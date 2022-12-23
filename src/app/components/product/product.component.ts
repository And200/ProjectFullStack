import { HttpClient } from '@angular/common/http';
import { Component, OnInit,EventEmitter,Output ,Input, ChangeDetectionStrategy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from 'src/app/dialog/dialog.component';
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
  id!:string |null;


  @Output()deleteProductEvent= new  EventEmitter<number>();

  constructor(private route:ActivatedRoute,private dialog: MatDialog,private readonly router:Router ,  private readonly productService:ProductServicesService,private readonly http:HttpClient
    ) {

  }


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(queryParams => {
      this.id =queryParams.get('product');
      console.log(this.id)
    })

    if(this.id){
      this.openDialog();
      if(this.dialog.afterAllClosed){
        this.dialog.closeAll()
      }
    }
  }



  openDialog() {
    this.dialog.open(DialogComponent,{
    });

  }

    deleteProduct(id:number){
      this.deleteProductEvent.emit(id);
   }







   getTotalPrice() {
     return this.productService.getTotal(this.productStore)

   }






}
