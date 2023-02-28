import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {
  product: Product;
  constructor(private _db: ProductsService, private route: ActivatedRoute){}

  ngOnInit(){
    const id: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this._db.getProductById(id)
    .subscribe((product) => {
      this.product = product
      console.log(product)
    });
  }
}
