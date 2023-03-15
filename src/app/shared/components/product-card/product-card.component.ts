import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from 'src/app/models/Cart.model';
import { Product } from 'src/app/models/Product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{
  @Input()
  productItem: Product;

  constructor(private _db: CartService, private _snackBar: MatSnackBar){

  }
  ngOnInit(): void {

  }
  onButtonClick(){
    let cartItem: Cart = {
      productImg: this.productItem.productImg,
      productName: this.productItem.productName,
      productPrice: this.productItem.productPrice,
      cartID: 0,
      productAmount: 1
    }

    this._db.addItem(cartItem).subscribe({
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
