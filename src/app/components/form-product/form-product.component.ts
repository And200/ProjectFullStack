
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';


import { Product } from 'src/app/models/product.model';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],

})
export class FormProductComponent implements OnInit {


  contactForm!: FormGroup;
   classStyle='btn btn-info';
 label='product';
product!: Product;
categories:Category[]=[];

  constructor(private route:Router, private readonly fb:FormBuilder, readonly productService:ProductServicesService) { }

  ngOnInit(): void {



      this.contactForm=this.initForm();
      this.productService.getCategories().subscribe(categories => this.categories=categories);



      }


  onCreateProduct() {

      this.product = this.contactForm.value;
      this.product.productCategory={id:this.contactForm.value.productCategory};

      console.log(this.product);
            this.productService.createProduct(this.product).subscribe();
            Swal.fire("Product created",`Product with name ${this.product.name } `)
            this.route.navigate(['/app-products'])

  }





  initForm(): FormGroup {
    return this.fb.group({

      id:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(3)]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      description:['',[Validators.required,Validators.minLength(3)]],
      productCategory:['',[Validators.required]],
    })




}
}


