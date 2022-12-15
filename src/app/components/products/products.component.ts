import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductServicesService } from 'src/app/services/product-services.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {




  productStore:Product[]=[];
  constructor( private readonly productsService:ProductServicesService) {

   }


  ngOnInit(): void {

    this.productsService.getProducts().subscribe(products=>{
      this.productStore=products;})


  }





   async onDeleteProduct(id:number) {


    Swal.fire({
      title: 'Do you want to delete this product?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {

      if (result.isConfirmed) {
        this.productsService.deleteProduct(id).subscribe(()=>{
          const tempArr=this.productStore.filter(c=>c.id !==id)
          this.productStore=tempArr;
          Swal.fire(`Product Deleted `, '', 'success')
        });

      } else if (result.isDenied) {
        Swal.fire('Product not deleted', '', 'info')
      }
    })








}




}
