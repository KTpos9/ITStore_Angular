import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  @Input() showModal: boolean;
  @Input() selectedProduct: Product | null;

  @Output() showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() productUpdated: EventEmitter<void> = new EventEmitter<void>();

  categories: string[] = ['GPU', 'CPU', 'Monitor', 'RAM', 'SSD', 'MAINBOARD', 'etc.'];

  constructor(private productService: ProductsService) { }

  closeModal() {
    this.selectedProduct = null;
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }

  updateProduct() {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct).subscribe({
        next: (product) => {
          this.closeModal();
          this.productUpdated.emit(); // emit an event
        },
        error: (res) => {
          console.log("Error:", res)
        },
        complete: () => {
          console.log("Product update successfully");
        }
      });
    }
  }
}
