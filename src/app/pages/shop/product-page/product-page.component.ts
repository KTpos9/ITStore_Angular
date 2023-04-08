import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  constructor(public _db: ProductsService) {}
  products: Product[] = [];
  loading: boolean = true;

  ngOnInit() {
    this.loading = false;
  }
}
