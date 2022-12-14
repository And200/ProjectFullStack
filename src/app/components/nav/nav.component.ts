import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class NavComponent  implements OnInit {


  constructor( private readonly router: Router) { }

    ngOnInit(): void {

    }

    goToProducts() {
        this.router.navigate(['app-products'])
      }


      goToFormProduct(): void {
        this.router.navigate(['app-form-product'])
      }




}
