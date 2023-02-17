import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cart } from '../models/Cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  getCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${environment.baseApiUrl}/api/Cart`);
  }
}
