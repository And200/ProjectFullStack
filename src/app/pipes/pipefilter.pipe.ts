import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';
@Pipe({
  name: 'pipefilter'
})
export class PipefilterPipe implements PipeTransform {

  transform(products: Product[], arg: string):Product[] {
    if(!arg || arg?.length<1) return products;
    let result:Product[] = [];
     for (const product of products) {
       if(product.name.toLowerCase().includes(arg.toLowerCase())) {
        result.push(product);
       }

     }


     return result;

   }


}

/*
transform(values: Product[], arg: Product["title"]) {
  if(!arg || arg?.length<3)return values;
  let result: Product[] =[];
   for (const value of values) {
     if(value.title===arg) {
      result.push(value);
     }

   }
   return result;
 }

 */
