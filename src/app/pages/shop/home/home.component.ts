import { Component , OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private _db: ProductsService){

  }
  ngOnInit(): void {
    this._db.getProducts()
    .subscribe({
      next: (products) => {
        this.products = products
        console.log(products)
      },
      error: (response) => {
        console.log(response)
      }
    });
  }

}
