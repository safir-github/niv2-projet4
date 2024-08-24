import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
