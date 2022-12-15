
import {Component, OnInit, Input, Output, EventEmitter,OnChanges,AfterViewInit,OnDestroy,SimpleChanges, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush

})
export class ImgComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy{

  img :string='';
  @Input('img')
  set changeImg(newImg:string){
    this.img=newImg;
    console.log('change just img =>',this.img);

  }
@Input() alt:string='';
@Output() loaded= new  EventEmitter<string>();
imageDefault ='/assets/descarga.jpg';

/*
count=0;
countFn:number| undefined;
*/
  constructor() {
    console.log('constructor','imgValue =>',this.img);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges','imgValue =>',this.img);
    console.log('changes',changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit','imgValue =>',this.img);

    /*
   this.countFn= window.setInterval(()=>{
      this.count+=1;
      console.log('run count');
    },1000)
    */
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
    /*
    window.clearInterval(this.countFn)

    */
  }

  imgError(){
    this.img=this.imageDefault;
  }
  imgLoaded(){

    console.log("log son");
    this.loaded.emit(this.img);
  }
}
