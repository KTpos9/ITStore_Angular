import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/Product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //inject Httpclient for calling the api
  constructor(private http: HttpClient) { }

  //call the api to get the product as an Observable[]
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseApiUrl}/api/Product`);
  }
}
