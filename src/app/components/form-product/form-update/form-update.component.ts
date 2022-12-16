
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';

import { Product } from 'src/app/models/product.model';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {


    contactForm!:FormGroup
  product:Product=new Product();
  categories:Category[] = [];
  constructor(private route:Router, private activate:ActivatedRoute,private productService:ProductServicesService, private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.initForm();

          this.activate.params.subscribe(params=>{
            let id =params['id']
            if(id){
              this.productService.getProductById(id).subscribe((product: Product)=>{
                this.product=product;
                this.contactForm.patchValue({
                  id:this.product.id,
                  name: this.product.name,
                  price:this.product.price,
                  description:this.product.description,
                  image:this.product.image,
                  productCategory:this.product.productCategory.id
                })
              });

            }
          })

          this.productService.getCategories().subscribe((categories)=>{
            this.categories=categories;
          })




}






updateProduct(){
  this.product = this.contactForm.value;
  this.product.productCategory={id:this.contactForm.value.productCategory};

  console.log(this.product)
    this.productService.updateProduct(this.product).subscribe(()=>{
      Swal.fire("Product updated successfully","","success")

      this.route.navigate(['/app-products'])
    })

  }



  initForm(): FormGroup {
    return this.fb.group({
      id:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(3)]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      description:['',[Validators.required,Validators.minLength(3)]],
      productCategory: ['']

    })
}


}
