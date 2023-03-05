import { Component } from '@angular/core';
import { Cart } from 'src/app/models/Cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cartItems: Cart[] = [];
  constructor(private _db: CartService){

  }
  ngOnInit() {
    this.getCartItems()
  }

  deleteItem(id: number){
    console.log(id);
    this._db.deleteCart(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.log(response);
      },
      //re-render the cart (call when the operation is completed)
      complete: () => {
        this.getCartItems();
        console.log('iten deleted!');
      }
    });
  }

  getCartItems(){
    this._db.getCart().subscribe({
      next: (cartItem) => {
        this.cartItems = cartItem
        console.log(cartItem)
    },
    error: (response) => {
      console.log(response)
    }
  });
  }

}

