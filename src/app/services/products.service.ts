import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/Product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];
  //inject Httpclient for calling the api
  constructor(private http: HttpClient) {
    this.getProducts().subscribe({
      next: (products) => {
        this.products = products
        console.log(products);
      },
      error: (response) => {
        console.log(response);
        console.log(this.products);
      }
    });
  }

  //call the api to get the product as an Observable[]
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseApiUrl}/api/Product`);
  }
  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${environment.baseApiUrl}/api/Product/getById/${id}`);
  }

  searchProduct(search: string) {
    this.http.get<Product[]>(`${environment.baseApiUrl}/api/Product/search?q=${search}`).subscribe({
      next: (products) => {
        this.products = products
        console.log(products);
      },
      error: (response) => {
        console.log(response);
        console.log(this.products);
      }
    });
  }
}
