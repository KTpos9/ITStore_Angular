import { Component } from '@angular/core';
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

  constructor(private productService: ProductsService) {
    this.newProduct = {} as Product;
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(
      (response) => {
        console.log("Product add successfully:",response);
      },
      (error) => {
        console.error("Error:",error);
      }
    );
  }
}
