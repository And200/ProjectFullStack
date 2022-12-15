import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  categories:Category[] = [];
  constructor(private productService:ProductServicesService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data =>{
      this.categories=data.sort((a,b)=>a.id-b.id);
    });

  }

}
