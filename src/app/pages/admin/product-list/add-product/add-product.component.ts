import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  newProduct: Product;
  categories: string[] = ['GPU', 'CPU', 'Monitor', 'RAM', 'SSD', 'MAINBOARD', 'etc.'];

  constructor(private productService: ProductsService, private snackBar: MatSnackBar) {
    this.newProduct = {} as Product;
  }

  addProduct(product: Product) {
    this.productService.addProduct(this.newProduct).subscribe({
      next: (response) => {
        console.log("Product added successfully:", response);
        this.snackBar.open('Product added successfully', 'Close', { duration: 2000 });
        this.newProduct = {} as Product;
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }
}
