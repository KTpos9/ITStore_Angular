import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductScrollerComponent } from './product-scroller.component';

describe('ProductScrollerComponent', () => {
  let component: ProductScrollerComponent;
  let fixture: ComponentFixture<ProductScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductScrollerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
