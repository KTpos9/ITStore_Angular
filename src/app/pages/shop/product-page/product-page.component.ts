import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  constructor(private _db: ProductsService) {}
  products: Product[] = [];
  loading: boolean = true;

  ngOnInit() {
    this._db.getProducts()
    .subscribe({
      next: (products) => {
        this.products = products
        console.log(products)
        this.loading = false;
      },
      error: (response) => {
        console.log(response)
        console.log(this.products)
      }
    });
  }
}
