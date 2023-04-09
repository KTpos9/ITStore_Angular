import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Order } from '../models/Order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  //inject Httpclient for calling the api
  constructor(private http: HttpClient) { }

  //call the api to get the order as an Observable[]
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.baseApiUrl}/api/Order`);
  }
}
