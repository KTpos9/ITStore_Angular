import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Cart } from 'src/app/models/Cart.model';
import { Product } from 'src/app/models/Product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {
  product: Product;
  constructor(private _db: ProductsService, private route: ActivatedRoute, private cartService: CartService, private _snackBar: MatSnackBar){}

  ngOnInit(){
    //get id from the route parameter
    const id: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this._db.getProductById(id)
    .subscribe((product) => {
      this.product = product
      console.log(product)
    });
  }

  onButtonClick(){
    let cartItem: Cart = {
      productImg: this.product.productImg,
      productName: this.product.productName,
      productPrice: this.product.productPrice,
      cartID: 0,
      productAmount: 1
    }

    this.cartService.addItem(cartItem).subscribe({
      next: (product) => {
        console.log(`${product.productName} added to cart`);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._snackBar.open(`product added to cart`,'',{duration:1000});
      }
    });
  }
}
