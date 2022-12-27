import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!:Product;
  categories!: Category[];


  constructor( private location:Location, private activate:ActivatedRoute,private productService: ProductServicesService) { }

  ngOnInit(): void {

    this.activate.params.pipe(
      switchMap(params =>{
        let id =params['id']
        if(id){
          return this.productService.getProductById(id)
        }
        return [];
      })
    ).subscribe((product: Product)=>{
      this.product=product;
    });

    this.productService.getCategories().subscribe((categories)=>{
      this.categories=categories;
    })

  }


  goToBack(): void {
    this.location.back();
  }

}
