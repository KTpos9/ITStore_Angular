import { Component, Inject } from '@angular/core';
import { Cart } from 'src/app/models/Cart.model';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cartItems: Cart[] = [];
  sum: number = 0
  constructor(private _db: CartService, public dialog: MatDialog, private router: Router){

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
    },
    complete: () => {
      //get the sum of product price in cart
      this.sum = this.cartItems.map(x => x.productPrice).reduce((a,b) => a+ b);
      console.log(this.sum);
    }
  });
  }
  onCheckout(){
    let confirmAction = confirm("Your order has been recived");
    if(confirmAction){
      this.router.navigate(['/']);
    }
  }
}
