import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCartComponent } from './img-cart.component';

describe('ImgCartComponent', () => {
  let component: ImgCartComponent;
  let fixture: ComponentFixture<ImgCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
