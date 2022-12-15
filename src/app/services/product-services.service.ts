import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {



  constructor(private readonly Http:HttpClient) { }

  private readonly resourceUrl=environment.api;
  createProduct(product: Product):Observable<Product>{


      return this.Http.post<Product>(`${this.resourceUrl}products`,product);

  }





  getProducts():Observable<Product[]>{
    return this.Http.get<Product[]>(`${this.resourceUrl}products`);
}

getCategories():Observable<Category[]>{
  return this.Http.get<Category[]>(`${this.resourceUrl}categories`)
}

getProductById(id:number):Observable<Product>{
  return this.Http.get<Product>(`${this.resourceUrl}products/${id}`);

}



updateProduct(product:Product):Observable<void>{

  const productBody:Product ={
    id:product.id,
    name:product.name,
    price:product.price,
    description:product.description,
    image:product.image,
    productCategory:product.productCategory

  }
    return this.Http.put<void>(`${this.resourceUrl}products/${product.id}`,productBody)

}

    getTotal(products: Product[]): number {
    const total=  products.reduce((sum,product) => sum+product.price,0);
    return total;

    }

    deleteProduct(id:number):Observable<void>{


      return this.Http.delete<void>(`${this.resourceUrl}/products/${id}`);
    }




}
