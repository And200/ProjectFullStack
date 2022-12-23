import {Component, Inject,OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductServicesService } from '../services/product-services.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

    id!:string|null;
    product!:Product;
  constructor(private productService:ProductServicesService,private router:ActivatedRoute) {

   }
  ngOnInit(): void {

      this.router.queryParamMap.subscribe(queryParams => {
        this.id =queryParams.get('product');
      })
        if(this.id){
          this.productService.getProductById(+this.id).subscribe((product: Product) => {
              this.product=product
          })
        }

  }


}
