import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';
import { UpdateProductComponent } from './update-product/update-product.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['productId', 'productImg', 'productName', 'productPrice', 'productCategory','productDesc', 'actions']

  @ViewChild(UpdateProductComponent) updateProductModal: UpdateProductComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  products: Product[];
  showModal = false;
  selectedProduct: Product;

  constructor(private productService: ProductsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (product) => {
        this.products = product;
        console.log(product);

        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        console.log("Successfully get products");
      }
    });
  }

  filterProducts(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(product: Product): void {
    this.showModal = true;
    this.selectedProduct = { ...product };
  }

  onUpdateProduct(): void {
    this.getProducts();
  }

  onDelete(product: Product): void {
    if (confirm(`Confirm Delete product ${product.productName}?`)) {
      const deletedProduct = { ...product };
      this.productService.deleteProduct(product.productId).subscribe({
        next: () => {},
        error: (response) => {
          console.log("Error:", response);
        },
        complete: () => {
          console.log("Successfully deleted");
          this.getProducts();
          // Show snackbar message
          this.snackBar.open(`Product "${deletedProduct.productName}" deleted.`, 'Undo', {
            duration: 3000,
          }).onAction().subscribe(() => {
            // Handle undo action
            console.log('Undo delete:', deletedProduct);
            this.productService.addProduct(deletedProduct).subscribe({
              next: () => {
                console.log('Successfully undo delete');
                console.log(deletedProduct);
                this.getProducts();
              },
              error: (response) => {
                console.log('Error:', response);
              }
            });
          });
        }
      });
    }
  }
}
