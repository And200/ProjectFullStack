
import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';


import { Product } from 'src/app/models/product.model';
import { FileService } from 'src/app/services/file-service';
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
img = new FormData();

  constructor(private fileService :FileService,private route:Router, private readonly fb:FormBuilder, readonly productService:ProductServicesService) { }

  ngOnInit(): void {



      this.contactForm=this.initForm();
      this.productService.getCategories()
      .subscribe(categories => this.categories=categories);



      }


  onCreateProduct() {

    this.productService.createProduct(this.product).subscribe(
      ()=>{
          if(HttpStatusCode.Accepted){
            Swal.fire("Product Created Successfully"
            ,`Product with name ${this.product.name } `,"success")
            this.route.navigate(['/app-products'])
          }
        }
      );
  }


  upload(event:any) {
    const file=event.target.files[0];
    if(file){
      const formData= new FormData();
      formData.append('file', file);
      this.product = this.contactForm.value;
      this.product.categoryId=this.contactForm.value.productCategory;
      this.fileService.uploadFile(formData)
      .subscribe((response => {
        this.product.image=response.url;
        console.log("product image",this.product.image);
        console.log("PRODUCT",this.product)
        this.onCreateProduct();
      }));

    }
  }



  initForm(): FormGroup {
    return this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      description:['',[Validators.required,Validators.minLength(3)]],
      productCategory:['',[Validators.required]],
    })






}
}


