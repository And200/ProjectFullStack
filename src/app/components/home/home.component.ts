import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private readonly productService: ProductServicesService) {

   }



  ngOnInit(): void {

  }





}
