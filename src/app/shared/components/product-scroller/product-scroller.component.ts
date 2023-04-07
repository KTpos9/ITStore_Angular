import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-scroller',
  templateUrl: './product-scroller.component.html',
  styleUrls: ['./product-scroller.component.scss']
})
export class ProductScrollerComponent {
  @Input() products: Product[];
  @Input() title: string;
}
