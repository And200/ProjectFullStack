import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img-cart',
  templateUrl: './img-cart.component.html',
  styleUrls: ['./img-cart.component.scss']
})
export class ImgCartComponent implements OnInit {

  img :string='';
  @Input('img')
  set changeImg(newImg:string){
    this.img=newImg;
    console.log('change just img =>',this.img);

  }
  @Input() alt:string='';
  @Output() loaded= new  EventEmitter<string>();
imageDefault ='/assets/descarga.png';

  constructor() { }

  ngOnInit(): void {

  }


imgError(){
  this.img=this.imageDefault;
}
imgLoaded(){

  console.log("log son");
  this.loaded.emit(this.img);
}
}
