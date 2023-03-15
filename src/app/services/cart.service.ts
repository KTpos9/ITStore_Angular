import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cart } from '../models/Cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //inject Httpclient for calling the api
  constructor(private http: HttpClient) { }

  //call the api to get the product as an Observable[]
  getCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${environment.baseApiUrl}/api/Cart`);
  }

  addItem(item: Cart): Observable<Cart>{
    return this.http.post<Cart>(`${environment.baseApiUrl}/api/Cart`,item);
  }

  deleteCart(id: number){
    return this.http.delete(`${environment.baseApiUrl}/api/Cart/${id}`)
  }
}
