import { Category } from "./category.model";

export class Product{


  id:  number=0;
  name: string='';
  price : number=0;
  description: string='';
  image:string=''
  productCategory!:Category;

}


